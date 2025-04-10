"use client";

import { AvatarLoader } from "@/entities/user";
import { Box, Button, TextField } from "@mui/material";
import { Modal } from "@/shared/ui/modal/modal";
import { useForm } from "@/features/register/model/use-form";
import { RegisterState } from "@/features/register";

export const RegisterForm = () => {
  const state = RegisterState.use();

  const {
    setAvatar,
    avatarPreview,
    setAvatarPreview,
    register,
    onSubmit,
    handleSubmit,
    errors,
    clearErrors,
    isDisabled,
  } = useForm(state);

  return (
    <Modal
      isOpen={state.isFormOpen}
      onClose={() => state.setIsFormOpen(false)}
      title={"Регистрация"}
    >
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AvatarLoader
            setFile={setAvatar}
            preview={avatarPreview}
            setPreview={setAvatarPreview}
          />

          <TextField
            fullWidth
            label="Имя"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
            onFocus={() => clearErrors("name")}
          />
          <TextField
            fullWidth
            label="Фамилия"
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            margin="normal"
            onFocus={() => clearErrors("lastName")}
          />
          <TextField
            fullWidth
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            margin="normal"
            onFocus={() => clearErrors("email")}
          />
          <TextField
            fullWidth
            label="Имя пользователя"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            margin="normal"
            onFocus={() => clearErrors("username")}
          />
          <TextField
            fullWidth
            type="password"
            label="Пароль"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            margin="normal"
            onFocus={() => clearErrors("password")}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isDisabled}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
