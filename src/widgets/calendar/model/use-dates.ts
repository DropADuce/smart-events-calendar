import {IUseDates, TDays} from "@/widgets/calendar/domain/calendar.types";
import {addMonths, isSameMonth, subMonths, subYears } from "date-fns";
import {useCallback, useMemo, useState } from "react";
import {PORTION_SIZE, TODAY } from "../domain/calendar.constants";
import {createMonths, getEmptyCellsCount, getFirstDate, getFirstDateByGroup, getLastDate, getMonthTitle, getWeekDays} from "../domain/calendar.utils";

export const useDates = (): IUseDates => {
    const [days, setDays] = useState<TDays>(() => {
        const firstDate = subYears(TODAY, 1);

        return createMonths(firstDate, PORTION_SIZE * 2);
    });

    const [visibleDateIndex, setVisibleDateIndex] = useState(0);

    const groupsCount = useMemo(() => days.map(() => 1), [days]);

    const currentDate = useMemo(() => getFirstDateByGroup(days, visibleDateIndex), [days, visibleDateIndex]);

    const currentMonth = useMemo(() => (
        getMonthTitle(currentDate)
    ), [currentDate]);

    const weekDays = useMemo(getWeekDays, []);

    const todayGroupIndex = useMemo(() => {
        return days.findIndex((group, index) => {
            const [date] = group;

            if (isSameMonth(TODAY, date)) {
                return index;
            }
        })
    }, [TODAY, days.length]);

    const getDaysByGroup = useCallback((index: number) => {
        return days[index];
    }, [days]);

    const addNextDays = useCallback(() => {
        setDays((prev) => [...prev, ...createMonths(addMonths(getLastDate(prev), 1), PORTION_SIZE)])
    }, []);

    const addPrevDays = useCallback(() => {
        setDays((prev) => [...createMonths(subMonths(getFirstDate(prev), PORTION_SIZE), PORTION_SIZE), ...prev]);
    }, []);

    const getMonthByIndex = useCallback((index: number) => {
        return getFirstDateByGroup(days, index)
    }, [days]);

    const getMonthTitleByIndex = useCallback((index: number) => {
        return getMonthTitle(getMonthByIndex(index));
    }, [getMonthByIndex]);

    const getMonthStartDayNumber = useCallback((index: number) => {
        return getEmptyCellsCount(getMonthByIndex(index));
    }, [getMonthByIndex])

    return {
        weekDays,
        groupsCount,
        currentMonth,
        addNextDays,
        addPrevDays,
        todayGroupIndex,
        visibleDateIndex,
        setVisibleDateIndex,
        getDaysByGroup,
        getMonthByIndex,
        getMonthTitleByIndex,
        getMonthStartDayNumber,
    }
}