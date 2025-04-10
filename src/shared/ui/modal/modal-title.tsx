import { Box, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IModalTitleProps {
  title: string;
  onClose: Func;
}

export const ModalTitle = ({ title, onClose }: IModalTitleProps) => (
  <Box>
    <DialogTitle>{title}</DialogTitle>

    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
      }}
    >
      <CloseIcon />
    </IconButton>
  </Box>
);
