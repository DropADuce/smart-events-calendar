import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakpoints = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down("md"));
};
