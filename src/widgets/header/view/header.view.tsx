import { AppBar, Box, Grid2 } from "@mui/material";
import Link from "next/link";
import { PropsWithChildren, ReactElement } from "react";

interface IHeaderViewProps {
  logo: ReactElement;
}

export const HeaderView = ({
  logo,
  children,
}: PropsWithChildren<IHeaderViewProps>) => (
  <AppBar position="static">
    <Grid2 container>
      <Grid2 size={5}>
        <Link href="/">{logo}</Link>
      </Grid2>

      <Grid2 size={7}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          {children}
        </Box>
      </Grid2>
    </Grid2>
  </AppBar>
);
