import { ReactElement } from "react";

interface IModalViewProps {
  modal: ReactElement;
  bottomSheet: ReactElement;
  isMobile: boolean;
  isOpen: boolean;
}

export const ModalView = ({
  modal,
  bottomSheet,
  isMobile,
  isOpen,
}: IModalViewProps) => {
  if (!isMobile) return modal;

  if (!isOpen) return null;

  return bottomSheet;
};
