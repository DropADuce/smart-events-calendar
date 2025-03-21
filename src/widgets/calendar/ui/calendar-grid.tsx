import {TDate} from "@/widgets/calendar/domain/calendar.types";
import {ReactElement} from "react";
import {Box} from "@mui/material";

interface ICalendarGridProps {
    days: Array<TDate>;
    renderDays: Func<[date: TDate], ReactElement>
    emptyCellsCount: number;
    renderEmptyCells: Func<[index: number], ReactElement>;
}

export const CalendarGrid = ({days, renderDays, emptyCellsCount, renderEmptyCells}: ICalendarGridProps) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: 1
            }}
        >
            {
                Array
                    .from({length: emptyCellsCount})
                    .map((_, index) => renderEmptyCells(index))
            }

            {days.map(renderDays)}
        </Box>
    )
}