import React from "react";
import Icon from "./Icon.tsx";
import MarginView from "./MarginView.tsx";
import {formatPercent, getMargin} from "../utils";

type Props = {
    value: number;
    previousValue: number;
    title: string;
    displayType?: "number" | "percent"
}

const MetricPanel = ({value, previousValue, title, displayType = "number"}: Props): React.JSX.Element => {
    const margin = getMargin(value, previousValue);
    return (
        <section>
            <h2>{title}<br/><Icon id="pulse"/></h2>
            <p>{displayType == "number" ? value : formatPercent(value)}</p>
            <MarginView margin={margin}/>
        </section>
    );
};

export default MetricPanel;
