const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const uploadsDir = path.join(__dirname, "backend-static", "images");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

server.use(middleware);
server.use(cookieParser());
server.use(jsonServer.bodyParser);

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "15m";

const REFRESH_SECRET = process.env.REFRESH_EXPIRES_IN;
const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN || "7d";

const createToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
const createRefreshToken = (payload) =>
  jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });

const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token;
  const refreshToken = req.cookies?.refreshToken;

  if (!token && !refreshToken)
    return res.status(401).json({ message: "Токен не получен" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    if (!refreshToken)
      return res.status(401).json({ message: "Refresh token отсутствует" });

    try {
      const decodedRefresh = jwt.verify(refreshToken, REFRESH_SECRET);
      const newAccessToken = createToken({
        id: decodedRefresh.id,
        email: decodedRefresh.email,
      });

      res.cookie("token", newAccessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 15 * 60 * 1000,
      });

      req.user = decodedRefresh;
      return next();
    } catch (_) {
      res.status(401).json({ message: "Не валидный токен" });
    }
  }
};

server.post("/users/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Файл не загружен" });
  }
  res.json({ imageUrl: `${uploadsDir}/${req.file.filename}` });
});

server.post("/users", (req, res, next) => {
  const { email, username, ...otherFields } = req.body;

  const users = router.db.get("users").value();

  const isDublicate = users.some(
    (user) => user.email === email || user.username === username,
  );

  if (isDublicate) {
    return res.status(400).json({
      message: "Пользователь с таким email или паролем уже существует",
    });
  }

  const newUser = {
    id: Date.now(),
    email,
    username,
    ...otherFields,
    avatar: req.body.avatar ?? null,
  };

  router.db.get("users").push(newUser).write();
  res.status(201).json(newUser);
});

// Логин
server.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = router.db.get("users").value();

  const user = users.find((u) => email === u.email && password === u.password);

  if (!user)
    return res.status(401).json({ message: "Не верный email или пароль" });

  const token = createToken({ id: user.id, email: user.email });
  const refreshToken = createRefreshToken({ id: user.id, email: user.email });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 15 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: "Успешный вход",
    user: { id: user.id, email: user.email },
  });
});

// Разлогин
server.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("refreshToken");
  res.json({ message: "Вы вышли" });
});

// Рефреш
server.post("/refresh", (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token)
    return res.status(401).json({ message: "refresh токен не получен" });

  jwt.verify(token, REFRESH_SECRET, (err, data) => {
    if (err) return res.status(403).json({ message: "Не валидный токен" });

    console.log(data, "data");

    const newAccessToken = createToken({ id: data.id, email: data.email });
    const newRefreshToken = createRefreshToken({
      id: data.id,
      email: data.email,
    });

    res.cookie("token", newAccessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json();
  });
});

server.post("/me", authMiddleware, (req, res) => {
  try {
    const user = router.db.get("users").find({ id: req.user.id }).value();

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const { password, ...safeUser } = user;

    res.json(safeUser);
  } catch (_) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

server.use(router);

server.listen(5488, () => {
  console.log("Сервер стартанул, можем работать!");
});
