import {ReactElement} from "react";
import {FormControlLabel, Typography} from "@mui/material";

interface IToggleThemeViewProps {
    label: string;
    switcher: ReactElement;
}

export const ToggleThemeView = ({switcher, label}: IToggleThemeViewProps) => {
    return (
        <FormControlLabel
            control={switcher}
            labelPlacement='start'
            label={
                <Typography variant='body1'>
                    {label}
                </Typography>
            }
        />
    );
}