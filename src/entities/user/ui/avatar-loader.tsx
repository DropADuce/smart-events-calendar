import { Avatar, Box } from "@mui/material";
import { useAvatarLoader } from "@/entities/user/model/use-avatar-loader";

interface IAvatarLoaderProps {
  setFile: Func<[File]>;
  preview: Maybe<string>;
  setPreview: Func<[Maybe<string>]>;
}

export const AvatarLoader = ({
  setFile,
  preview,
  setPreview,
}: IAvatarLoaderProps) => {
  const { onAvatarChange } = useAvatarLoader(setFile, setPreview);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <label htmlFor="upload-avatar">
        <Avatar
          sx={{ width: 96, height: 96, cursor: "pointer" }}
          {...(preview && { src: preview })}
        />
      </label>

      <input
        id="upload-avatar"
        type="file"
        hidden
        accept="image/*"
        onChange={onAvatarChange}
      />
    </Box>
  );
};
