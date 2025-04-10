"use client";

import { useBreakpoints } from "@/shared/ui/modal/hooks/use-breakpoints";
import { ModalView } from "@/shared/ui/modal/modal.view";
import { Dialog } from "@/shared/ui/modal/dialog";
import { ModalTitle } from "@/shared/ui/modal/modal-title";
import { UpDownSlide } from "@/shared/ui/modal/up-down-slide";
import { PropsWithChildren } from "react";
import { BottomSheet } from "@/shared/ui/modal/bottom-sheet";
import { useDragControls } from "motion/react";

interface IModalProps {
  isOpen: boolean;
  onClose: Func;
  title: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: PropsWithChildren<IModalProps>) => {
  const isMobile = useBreakpoints();
  const dragControls = useDragControls();

  return (
    <ModalView
      isMobile={isMobile}
      isOpen={isOpen}
      modal={
        <Dialog
          isOpen={isOpen}
          onClose={onClose}
          title={<ModalTitle title={title} onClose={onClose} />}
          TransitionComponent={UpDownSlide}
        >
          {children}
        </Dialog>
      }
      bottomSheet={
        <BottomSheet onClose={onClose} dragControls={dragControls}>
          {children}
        </BottomSheet>
      }
    />
  );
};
