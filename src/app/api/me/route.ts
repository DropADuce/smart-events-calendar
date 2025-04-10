import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const res = await fetch(`${process.env.API_URL}/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: [
        token ? `token=${token}` : null,
        refreshToken ? `refreshToken=${refreshToken}` : null,
      ]
        .filter(Boolean)
        .join("; "),
    },
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
