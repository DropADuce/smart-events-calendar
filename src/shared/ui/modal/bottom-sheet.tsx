import { BottomSheetLayout } from "@/shared/ui/modal/bottom-sheet-layout";
import { DragControls, motion } from "motion/react";
import { checkBottomSheetThreshold } from "@/shared/ui/modal/lib/check-bottom-sheet-threshold";
import { BOTTOM_SHEET_THRESHOLD } from "@/shared/ui/modal/constants/constants";
import { colors } from "@/shared/config/colors/colors";
import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";

interface IBottomSheetProps {
  onClose: Func;
  dragControls: DragControls;
}

export const BottomSheet = ({
  onClose,
  dragControls,
  children,
}: PropsWithChildren<IBottomSheetProps>) => (
  <BottomSheetLayout>
    <motion.div
      drag="y"
      dragMomentum
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "50%", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 25, velocity: 10 }}
      dragConstraints={{ top: 0 }}
      onDragEnd={(_, info) => {
        if (checkBottomSheetThreshold(info, BOTTOM_SHEET_THRESHOLD)) {
          onClose();
        }
      }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        borderRadius: "16px 16px 0 0",
        zIndex: 1100,
      }}
    >
      <Paper elevation={4} sx={{ padding: 2, borderRadius: "16px 16px 0 0" }}>
        <motion.div
          drag="y"
          dragControls={dragControls}
          dragListener={false}
          style={{
            width: 50,
            height: 4,
            background: colors.primary,
            borderRadius: 16,
            margin: "0 auto 10px auto",
            cursor: "grab",
          }}
        />

        {children}
      </Paper>
    </motion.div>
  </BottomSheetLayout>
);
