import "@testing-library/jest-dom";
import {render} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import MetricPanel from "./MetricPanel";

describe("MetricPanel", () => {
    it("renders a numeric panel correctly", () => {
        const {getByText} = render(<MetricPanel value={100} previousValue={50} title={"Visitors"}/>);
        expect(getByText("Visitors")).toBeInTheDocument();
        expect(getByText("100")).toBeInTheDocument();
    });

    it("renders a currency panel correctly", () => {
        const {getByText} = render(<MetricPanel value={1234.56} previousValue={532.1} title={"Sales"} displayType="currency"/>);
        expect(getByText("Sales")).toBeInTheDocument();
        expect(getByText("$1,234.56")).toBeInTheDocument();
    });

    it("renders a percentage panel correctly", () => {
        const {getByText} = render(<MetricPanel value={0.5} previousValue={0.4} title={"Conversion Rate"} displayType="percent"/>);
        expect(getByText("Conversion Rate")).toBeInTheDocument();
        expect(getByText("50%")).toBeInTheDocument();
    });
});