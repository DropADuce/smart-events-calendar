import {HeaderView} from "@/widgets/header/view/header.view";
import {HeaderLogo} from "@/widgets/header/ui/header-logo";
import {ToggleTheme} from "@/features/toggle-theme";
import {Typography} from "@mui/material";

export const Header = () => {
    return (
        <HeaderView
            logo={<HeaderLogo />}
        >
            <ToggleTheme />

            <Typography variant='body1' padding={2}>Не авторизован</Typography>
        </HeaderView>
    )
}