import { MenuItem } from "@mui/material";
import { RegisterState } from "@/features/register";

export const RegisterMenuButton = () => {
  const { setIsFormOpen } = RegisterState.use();

  return <MenuItem onClick={() => setIsFormOpen(true)}>Регистрация</MenuItem>;
};
