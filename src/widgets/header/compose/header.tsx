"use client";

import { HeaderView } from "@/widgets/header/view/header.view";
import { HeaderLogo } from "@/widgets/header/ui/header-logo";
import { ToggleTheme } from "@/features/toggle-theme";
import {
  RegisterForm,
  RegisterMenuButton,
  RegisterService,
  RegisterState,
  Service,
} from "@/features/register";
import { MenuButton } from "@/shared/ui/menu-button/menu-button";
import { LoginMenuButton } from "@/features/login";
import { useAuthStore } from "@/features/login/model/use-auth-store";
import { MenuItem } from "@mui/material";
import { AuthProvider } from "@/features/login/ui/auth-provider/auth-provider";

export const Header = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const userName = useAuthStore((state) => state.user?.name);

  return (
    <RegisterService.Provider value={Service}>
      <RegisterState.Provider>
        <>
          <HeaderView logo={<HeaderLogo />}>
            <ToggleTheme />

            <AuthProvider>
              <MenuButton
                title={isAuth && userName ? userName : "Не авторизован"}
                menuItems={
                  !isAuth
                    ? [
                        <RegisterMenuButton key={"register-button"} />,
                        <LoginMenuButton key={"login-button"} />,
                      ]
                    : [<MenuItem key="exit">Выйти</MenuItem>]
                }
              />
            </AuthProvider>
          </HeaderView>

          <RegisterForm />
        </>
      </RegisterState.Provider>
    </RegisterService.Provider>
  );
};
