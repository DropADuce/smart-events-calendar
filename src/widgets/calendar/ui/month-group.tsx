import {Box, Typography} from "@mui/material";

interface IMonthGroupProps {
    month: string;
    isScrolling: boolean;
    isCurrentMonth: boolean;
}

export const MonthGroup = ({month, isScrolling, isCurrentMonth}: IMonthGroupProps) => (
    <Box sx={{ padding: 2 }}>
        <Typography
            variant='h6'
            sx={{...(isCurrentMonth && !isScrolling && { opacity: 0 })}}
        >
            {month}
        </Typography>
    </Box>
)