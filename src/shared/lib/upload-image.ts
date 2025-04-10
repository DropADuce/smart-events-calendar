import { ChangeEvent } from "react";

export const uploadImage = (
  event: ChangeEvent<HTMLInputElement>,
  setFile: Func<[File]>,
  setPreview: Func<[string]>,
) => {
  if (!event.target.files) return;

  const [file] = event.target.files;

  if (!file) return;

  setFile(file);
  setPreview(URL.createObjectURL(file));
};
