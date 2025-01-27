import {Margin} from "../types";

const percentageFormatter = new Intl.NumberFormat("en", {
    style: "percent",
    maximumFractionDigits: 2,
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
});

function padZero(num: number) {
    return num.toString().padStart(2, "0");
}

export function formatTimestamp(value: Date): string {
    return `${padZero(value.getHours())}:${padZero(value.getMinutes())}:${padZero(value.getSeconds())}`;
}

export function formatCurrency(value: number): string {
    return currencyFormatter.format(value);
}

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

