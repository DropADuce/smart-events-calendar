import { Dialog as MUIDialog, DialogContent } from "@mui/material";
import { ElementType, PropsWithChildren, ReactElement } from "react";

interface IDialogProps {
  isOpen: boolean;
  onClose: Func;
  title: ReactElement;
  TransitionComponent: ElementType;
}

export const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  TransitionComponent,
}: PropsWithChildren<IDialogProps>) => {
  return (
    <MUIDialog
      open={isOpen}
      disablePortal
      onClose={onClose}
      slots={{ transition: TransitionComponent }}
    >
      {title}

      <DialogContent>{children}</DialogContent>
    </MUIDialog>
  );
};
