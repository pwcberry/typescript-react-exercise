import {Margin} from "../types.ts";

const percentageFormatter = new Intl.NumberFormat("en", {
    style: "percent",
    maximumFractionDigits: 2,
});

export function formatPercent(value: number): string {
    return percentageFormatter.format(value);
}

export function getMargin(newValue: number, oldValue: number): Margin {
    const margin = newValue - oldValue;

    return {
        value: margin,
        percentage: margin / oldValue,
        isUp: margin > 0,
    };
}

