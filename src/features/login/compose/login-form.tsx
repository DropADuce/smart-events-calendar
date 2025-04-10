"use client";

import { Button, TextField, Typography } from "@mui/material";
import { LoginFormView } from "@/features/login/view/login-form-view/login-form.view";
import { useLoginForm } from "@/features/login/model/use-login-form";

export const LoginForm = () => {
  const { handleSubmit, onSubmit, register, login, errors } = useLoginForm();

  return (
    <LoginFormView
      onSubmit={handleSubmit(onSubmit)}
      isError={login.isError}
      emailField={
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />
      }
      passwordField={
        <TextField
          label="Пароль"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
        />
      }
      submitButton={
        <Button
          type="submit"
          variant="contained"
          loading={login.isPending}
          disabled={login.isPending}
        >
          <Typography variant="button">Войти</Typography>
        </Button>
      }
    />
  );
};
