import {Button, Grid2, Typography} from "@mui/material";

interface ICalendarHeaderProps {
    onToday: Func;
    currentMonth: string;
}

export const Header = ({onToday, currentMonth}: ICalendarHeaderProps) => {
    return (
        <Grid2 container>
            <Grid2
                size={{xs: 12, sm: 6}}
                sx={{padding: 2, textAlign: {xs: 'center', sm: 'start'}}}
            >
                <Typography textTransform='uppercase' variant='h4'>{currentMonth}</Typography>
            </Grid2>

            <Grid2
                container
                size={{xs: 12, sm: 6}}
                sx={{justifyContent: {xs: 'center', sm: 'flex-end'}, alignItems: 'center'}}
            >
                <Button
                    onClick={onToday}
                >
                    <Typography variant='h5'>{'Сегодня'}</Typography>
                </Button>
            </Grid2>
        </Grid2>
    )
}