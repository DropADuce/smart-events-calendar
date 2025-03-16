import {ReactElement} from "react";
import {Box, Divider} from "@mui/material";

interface ICalendarViewProps {
    header: ReactElement;
    weekDays: ReactElement;
    calendar: ReactElement;
}

export const CalendarView = ({header, weekDays, calendar}: ICalendarViewProps) => {
    return (
        <Box sx={{display: "flex", flexDirection: 'column', flexGrow: 1}}>
            <Box sx={{padding: 2}}>
                {header}
            </Box>

            <Divider/>

            {weekDays}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                }}
            >
                {calendar}
            </Box>
        </Box>
    )
}