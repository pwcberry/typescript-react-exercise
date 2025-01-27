import "@testing-library/jest-dom";
import {render } from "@testing-library/react";
import {describe, expect, it} from "vitest";
import MarginView from "./MarginView";
import { Margin } from "../types";

describe("MarginView", () => {
    describe("when margin is positive", () => {
        const INPUT : Margin = {
            value: 5,
            percentage: 0.75,
            isUp: true
        };

        it("renders text correctly", () =>{
            const { getByText } = render(<MarginView margin={INPUT}/>);
            expect(getByText("75% from last update")).toBeInTheDocument();
        });

        it("displays green text", () => {
            const { container } = render(<MarginView margin={INPUT}/>);
            const { firstChild: element } = container;
            expect((element! as Element).className).toContain("text-green-600");
        });

        it("displays an up arrow icon", () => {
            const { container } = render(<MarginView margin={INPUT}/>);
            const element = container.querySelector("use");
            const hrefAttribute: string = (element! as SVGUseElement).getAttribute("href") as string;
            expect(hrefAttribute).toBe("#arrow-up");
        });
    });

    describe("when margin is negative", () => {
        const INPUT : Margin = {
            value: 5,
            percentage: -0.0125,
            isUp: false
        };

        it("renders text correctly", () =>{
            const { getByText } = render(<MarginView margin={INPUT}/>);
            expect(getByText("-1.25% from last update")).toBeInTheDocument();
        });
        
        it("displays red text", () => {
            const { container } = render(<MarginView margin={INPUT}/>);
            const { firstChild: element } = container;
            expect((element! as Element).className).toContain("text-red-600");
        });

        it("displays an down arrow icon", () => {
            const { container } = render(<MarginView margin={INPUT}/>);
            const element = container.querySelector("use");
            const hrefAttribute: string = (element! as SVGUseElement).getAttribute("href") as string;
            expect(hrefAttribute).toBe("#arrow-down");
        });
    });
});
