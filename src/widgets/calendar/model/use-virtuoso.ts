import {IUseDates, IUseVirtuoso} from "@/widgets/calendar/domain/calendar.types";
import {useCallback, useLayoutEffect, useRef, useState} from "react";
import { GroupedVirtuosoHandle, ListRange } from "react-virtuoso";
import { PORTION_SIZE } from "../domain/calendar.constants";

export const useVirtuoso = ({ todayGroupIndex, setVisibleDateIndex, addPrevDays, addNextDays }: IUseDates): IUseVirtuoso => {
    const ref = useRef<GroupedVirtuosoHandle>(null);

    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

    const scrollToIndex = (index: number) => {
        if (ref.current) {
            ref.current.scrollToIndex(index);
        }
    }

    const onStartReached = useCallback(() => {
        if (isFirstRender) return;

        addPrevDays();

        setTimeout(() => {
            scrollToIndex(PORTION_SIZE)
        }, 0);
    }, [isFirstRender]);

    const rangeChanged = ({ startIndex }: ListRange) => {
        setVisibleDateIndex(startIndex);

        if (startIndex === 0) onStartReached();
    }

    const onScrollToday = useCallback(() => {
        scrollToIndex(todayGroupIndex)
    }, [todayGroupIndex]);

    useLayoutEffect(() => {
        setTimeout(() => {
            scrollToIndex(todayGroupIndex);

            setIsFirstRender(false);
        }, 200)
    }, [isFirstRender, todayGroupIndex]);

    return {
        ref,
        isScrolling,
        rangeChanged,
        setIsScrolling,
        onStartReached,
        onEndReached: addNextDays,
        onScrollToday,
    }
}