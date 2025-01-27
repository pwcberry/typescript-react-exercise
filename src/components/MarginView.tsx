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
        return (<p className="margin-view text-green-600">{formatPercent(percentage)} from last update <Icon className="icon-margin icon-sm" id="arrow-up"/></p>);
    }
    return (<p className="margin-view text-red-600">{formatPercent(percentage)} from last update <Icon className="icon-margin icon-sm" id="arrow-down"/></p>);
};

export default MarginView;
