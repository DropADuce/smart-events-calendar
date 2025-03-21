import {addDays, addMonths, getDay, getDaysInMonth, startOfMonth, startOfWeek} from "date-fns";
import {DAYS_IN_WEEK, WEEK_START_DAY} from "@/widgets/calendar/domain/calendar.constants";
import {TDate, TDays} from "@/widgets/calendar/domain/calendar.types";

export const getWeekDays = () => {
    const generator = new Intl.DateTimeFormat("ru-RU", {weekday: "short"});

    return Array.from({length: 7}, (_, i) =>
        generator.format(addDays(startOfWeek(new Date(), { weekStartsOn: WEEK_START_DAY }), i))
    )
}

export const createDaysByMonth = (month: Date) => {
    const monthStart = startOfMonth(month);

    return Array.from({length: getDaysInMonth(monthStart)}, (_, i) => (
        addDays(monthStart, i)
    ))
}

export const createMonths = (startMonth: Date, count: number) => {
    return Array.from({length: count}, (_, i) => (
        createDaysByMonth(addMonths(startMonth, i))
    ))
}

export const getEmptyCellsCount = (date: Date) => {
    return (getDay(date) + 6) % DAYS_IN_WEEK;
}

export const getLastDate = (days: TDays) => {
    const [lastDate] = days[days.length - 1].slice(-1);

    return lastDate;
}

export const getFirstDate = (days: TDays) => {
    const [[firstDate]] = days;

    return firstDate;
}

export const getFirstDateByGroup = (days: TDays, groupIndex: number) => {
    const [firstDay] = days[groupIndex];

    return firstDay;
}

export const getLastDateByGroup = (days: TDays, groupIndex: number) => {
    const [lastDate] = days[groupIndex].slice(-1);

    return lastDate;
}

export const getMonthTitle = (date: TDate) => {
    return date.toLocaleDateString('ru', { month: 'long', year: 'numeric' })
}