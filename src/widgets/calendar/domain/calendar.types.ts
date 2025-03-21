import {RefObject} from "react";
import {GroupedVirtuosoHandle, ListRange} from "react-virtuoso";

export type TDate = Date;
export type TDays = Array<Array<TDate>>;
export type TGroups = Array<number>;

export interface IUseDates {
    groupsCount: TGroups;
    currentMonth: string;
    weekDays: Array<string>;
    addNextDays: Func;
    addPrevDays: Func;
    todayGroupIndex: number;
    visibleDateIndex: number;
    setVisibleDateIndex: Func<[index: number]>;
    getDaysByGroup: Func<[index: number], Array<TDate>>;
    getMonthByIndex: Func<[index: number], TDate>;
    getMonthTitleByIndex: Func<[index: number], string>;
    getMonthStartDayNumber: Func<[index: number], number>;
}

export interface IUseVirtuoso {
    ref: RefObject<GroupedVirtuosoHandle | null>;
    isScrolling: boolean;
    setIsScrolling: Func<[isScrolling: boolean]>;
    rangeChanged: Func<[range: ListRange]>;
    onStartReached: Func;
    onEndReached: Func;
    onScrollToday: Func;
}