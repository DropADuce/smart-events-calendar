import { ChangeEvent, useCallback } from "react";
import { uploadImage } from "@/shared/lib/upload-image";

export const useAvatarLoader = (
  setFile: Func<[File]>,
  setPreview: Func<[string]>,
) => {
  const onAvatarChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    uploadImage(event, setFile, setPreview);
  }, []);

  return {
    onAvatarChange,
  };
};
