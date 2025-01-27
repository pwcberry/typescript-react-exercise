import "@testing-library/jest-dom";
import {render} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import TrendAnalysisPanel from "./TrendAnalysisPanel";
import {MetricEvent} from "../types.ts";

describe("TrendAnalysisPanel", () => {
    const DATA: MetricEvent[] = [{
        visitors: 147,
        sales: 986,
        conversionRate: 0.15697,
        timestamp: "15:30:45",
    }];

    it("renders the graph", () => {
        const {container} = render(<TrendAnalysisPanel data={DATA}/>);
        const element = container.querySelector("svg");
        expect(element).not.toBeNull();
        expect(element!.classList).toContain("recharts-surface");
    });
});