import { LoginFormWrapper } from "@/features/login/ui/login-form-wrapper/login-form-wrapper";
import { ReactElement } from "react";
import { Stack, Typography } from "@mui/material";

interface ILoginFormViewProps {
  onSubmit: Func;
  isError: boolean;
  emailField: ReactElement;
  passwordField: ReactElement;
  submitButton: ReactElement;
}

export const LoginFormView = ({
  onSubmit,
  isError,
  emailField,
  passwordField,
  submitButton,
}: ILoginFormViewProps): ReactElement => (
  <LoginFormWrapper>
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <Typography variant="h1">Login</Typography>

        {emailField}

        {passwordField}

        {submitButton}

        {isError && <Typography color="error">Неверные данные</Typography>}
      </Stack>
    </form>
  </LoginFormWrapper>
);
