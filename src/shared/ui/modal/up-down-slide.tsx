import { ForwardedRef, forwardRef, ReactElement } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Slide } from "@mui/material";

export const UpDownSlide = forwardRef(
  (
    props: TransitionProps & { children: ReactElement },
    ref: ForwardedRef<unknown>,
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  },
);
