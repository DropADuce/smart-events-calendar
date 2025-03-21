import {Typography} from "@mui/material";

interface IWeekDayProps {
    day: string;
}

export const WeekDay = ({ day }: IWeekDayProps) => (
    <Typography textAlign='center' variant='h5'>{day}</Typography>
)