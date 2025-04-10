import { PropsWithChildren, ReactElement } from "react";
import { Box, Card, CardContent } from "@mui/material";

export const LoginFormWrapper = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      padding={4}
    >
      <Card sx={{ width: 400, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};
