import React from "react";
import {Margin} from "../types.ts";
import {formatPercent} from "../utils";
import Icon from "./Icon.tsx";

type Props = {
    margin: Margin;
}

const MarginView = ({margin}: Props): React.JSX.Element => {
    const {isUp, percentage} = margin;
    if (isUp) {
        return (<p className="text-green-500">{formatPercent(percentage)} from last update <Icon id="arrow-up"/></p>);
    }
    return (<p className="text-red-600">{formatPercent(percentage)} from last update <Icon id="arrow-down"/></p>);
};

export default MarginView;
