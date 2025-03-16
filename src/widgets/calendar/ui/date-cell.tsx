import {memo} from "react";
import {Box, CardContent, Typography} from "@mui/material";
import {colors} from "@/shared/config/colors/colors";
import {Cell} from "@/widgets/calendar/ui/cell";

interface IDateCellProps {
    day: number;
    isWeekend: boolean;
    isCurrent?: boolean;
}

export const DateCell = memo(({day, isWeekend, isCurrent}: IDateCellProps) => {
    return (
        <Cell elevation={isWeekend ? 4 : 2}>
            <CardContent sx={{padding: 1}}>
                <Box height='100%'>
                    <Box height={32}>
                        <Box
                            sx={{
                                display: 'flex',
                                marginLeft: 'auto',
                                padding: 1,
                                width: 24,
                                height: 24,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                ...(isCurrent && {backgroundColor: colors.red}),
                                ...(isWeekend && {opacity: 0.5})
                            }}
                        >
                            <Typography variant='body1'>{day}</Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Cell>
    )
})