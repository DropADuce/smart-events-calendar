import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const BottomSheetLayout = ({ children }: PropsWithChildren) => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
    }}
  >
    {children}
  </Box>
);
