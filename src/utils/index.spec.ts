import {describe, expect, it} from "vitest";
import {formatCurrency, formatPercent, getMargin} from "./index";

describe("utils", () => {
    describe("getMargin", () => {
        it("returns a positive margin", () => {
            const value = 10;
            const previousValue = 5;
            const margin = getMargin(value, previousValue);

            expect(margin.value).toBe(5);
            expect(margin.percentage).toBe(1);
            expect(margin.isUp).toBeTruthy();
        });

        it("returns a negative margin", () => {
            const value = 5;
            const previousValue = 10;
            const margin = getMargin(value, previousValue);

            expect(margin.value).toBe(-5);
            expect(margin.percentage).toBe(-0.5);
            expect(margin.isUp).toBeFalsy();
        });
    });

    describe("formatPercent", () => {
        it("returns a positive percentage", () => {
            const value = 0.0555;
            const result = formatPercent(value);
            expect(result).toBe("5.55%");
        });

        it("returns a negative percentage", () => {
            const value = -0.7123;
            const result = formatPercent(value);
            expect(result).toBe("-71.23%");
        });

        it("rounds the last fraction digit", () => {
            const value = 0.23456;
            const result = formatPercent(value);
            expect(result).toBe("23.46%");
        });

        it("display comma for large percentages", () => {
            const value = 12.3456;
            const result = formatPercent(value);
            expect(result).toBe("1,234.56%");
        });
    });

    describe("formatCurrency", () => {
        it("renders the currency", () => {
            const value = 1234.56;
            const result = formatCurrency(value);
            expect(result).toBe("$1,234.56");
        });
    });
});

