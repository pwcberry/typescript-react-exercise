import React from "react";
import Icon from "./Icon.tsx";
import MarginView from "./MarginView.tsx";
import {formatPercent, formatCurrency, getMargin} from "../utils";

type Props = {
    value: number;
    previousValue: number;
    title: string;
    displayType?: "currency" | "number" | "percent"
}

const MetricPanel = ({value, previousValue, title, displayType = "number"}: Props): React.JSX.Element => {
    const margin = getMargin(value, previousValue);
    let renderValue;
    switch(displayType) {
        case "percent":
            renderValue = formatPercent(value);
            break;
        case "currency":
            renderValue = formatCurrency(value);
            break;
        default:
            renderValue = value;
            break;
    }

    return (
        <section className="shadow-sm shadow-gray-300 rounded-md border border-gray-200 mb-8 px-4 py-3">
            <h2 className="text-center text-2xl font-semibold mb-4">{title}<br/><Icon id="pulse" className="icon-inline icon-sm"/></h2>
            <p className="font-bold text-3xl">{renderValue}</p>
            <MarginView margin={margin}/>
        </section>
    );
};

export default MetricPanel;
