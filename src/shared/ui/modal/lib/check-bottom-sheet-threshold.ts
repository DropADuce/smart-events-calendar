import { PanInfo } from "framer-motion";

export const checkBottomSheetThreshold = (
  { point }: PanInfo,
  threshold: number,
) => {
  const visibleHeight = window.innerHeight - point.y;

  return visibleHeight < window.innerHeight * threshold;
};
