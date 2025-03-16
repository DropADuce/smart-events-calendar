import { Box } from "@mui/material";
import { ReactElement } from "react";

interface IWeekDaysProps {
    days: Array<string>;
    renderDay: Func<[day: string], ReactElement>
}

export const WeekDays = ({ days, renderDay }: IWeekDaysProps) => {
    return (
        <Box
            sx={{
                padding: 2,
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)'
            }}
        >
            { days.map(renderDay) }
        </Box>
    )
}