'use client';

import {useDates} from "@/widgets/calendar/model/use-dates";
import {useVirtuoso} from "@/widgets/calendar/model/use-virtuoso";
import { CalendarView } from "../view/calendar.view";
import {Header} from "@/widgets/calendar/ui/header";
import {WeekDays} from "@/widgets/calendar/ui/week-days";
import {WeekDay} from "@/widgets/calendar/ui/week-day";
import {GroupedVirtuoso} from "react-virtuoso";
import {MonthGroup} from "@/widgets/calendar/ui/month-group";
import {CalendarGrid} from "@/widgets/calendar/ui/calendar-grid";
import {DateCell} from "@/widgets/calendar/ui/date-cell";
import {isSameDay, isWeekend} from "date-fns";
import { TODAY } from "../domain/calendar.constants";
import { Cell } from "../ui/cell";

export const Calendar = () => {
    const dates = useDates();
    const virtuoso = useVirtuoso(dates);

    return (
        <CalendarView
            header={
                <Header
                    currentMonth={dates.currentMonth}
                    onToday={virtuoso.onScrollToday}
                />
            }
            weekDays={
                <WeekDays
                    days={dates.weekDays}
                    renderDay={(day) => (
                        <WeekDay
                            key={day}
                            day={day}
                        />
                    )}
                />
            }
            calendar={
                <GroupedVirtuoso
                    ref={virtuoso.ref}
                    style={{flexGrow: 1}}
                    isScrolling={virtuoso.setIsScrolling}
                    groupCounts={dates.groupsCount}
                    endReached={virtuoso.onEndReached}
                    rangeChanged={virtuoso.rangeChanged}
                    groupContent={(index: number) => (
                        <MonthGroup
                            month={dates.getMonthTitleByIndex(index)}
                            isScrolling={virtuoso.isScrolling}
                            isCurrentMonth={index === dates.visibleDateIndex}
                        />
                    )}
                    itemContent={(index: number) => (
                        <CalendarGrid
                            days={dates.getDaysByGroup(index)}
                            emptyCellsCount={dates.getMonthStartDayNumber(index)}
                            renderDays={(date) => (
                                <DateCell
                                    key={date.toLocaleDateString()}
                                    day={date.getDate()}
                                    isWeekend={isWeekend(date)}
                                    isCurrent={isSameDay(date, TODAY)}
                                />
                            )}
                            renderEmptyCells={(itemIndex: number) => (
                                <Cell
                                    key={`empty-cell-${dates.getMonthByIndex(index)}-${itemIndex}`}
                                    visible={false}
                                />
                            )}
                        />
                    )}
                />
            }
        />
    )
}