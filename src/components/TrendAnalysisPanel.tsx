import {useState} from "react";
import {CartesianGrid, Label, Legend, Line, LineChart, XAxis, YAxis} from "recharts";
import {formatCurrency, formatPercent} from "../utils";
import {MetricEvent} from "../types";

type Props = {
    data: MetricEvent[];
}

const TrendAnalysisPanel = ({data}: Props): React.JSX.Element => {
    const [graphView, setGraphView] = useState("conversionRate");

    const handleSelection = ({target}: { target: EventTarget }) => {
        setGraphView((target as HTMLSelectElement).value);
    };

    // Let's give the graph different colours according to the selection of the view
    let graphStyles: {
        stroke: string;
        formatter: (value: number) => string;
    };
    switch (graphView) {
        case "conversionRate":
            graphStyles = {
                stroke: "oklch(.627 .265 303.9)",
                formatter: (v) => formatPercent(v),
            };
            break;
        case "sales":
            graphStyles = {
                stroke: "oklch(.6 .118 184.704)",
                // Only obtain the whole dollar amounts
                formatter: (v) => formatCurrency(v).split(".")[0],
            };
            break;
        default:
            graphStyles = {
                stroke: "oklch(.646 .222 41.116)",
                formatter: (v) => String(v),
            };
            break;
    }

    return (
        <section className="shadow-sm shadow-gray-300 rounded-md border border-gray-200 mb-8 px-4 py-3">
            <header className="flex flex-row mb-8">
                <h2 className="inline-block text-2xl font-semibold">Trend Analysis</h2>
                <select className="border border-blue-200 outline-none ml-auto p-1" onChange={handleSelection}>
                    <option value="conversionRate">Conversion Rate</option>
                    <option value="sales">Sales</option>
                    <option value="visitors">Visitors</option>
                </select>
            </header>
            <LineChart data={data} width={800} height={400} margin={{top: 16, right: 36, left: 36, bottom: 16}}>
                <XAxis dataKey="timestamp">
                    <Label value="Time" position="insideBottom" offset={-16}/>
                </XAxis>
                <YAxis tickFormatter={graphStyles.formatter}/>
                <Legend verticalAlign="top" height={36}/>
                <CartesianGrid stroke="oklch(.872 .01 258.338)" strokeDasharray="5 5"/>
                <Line dataKey={graphView} type="monotone" stroke={graphStyles.stroke}/>
            </LineChart>
        </section>
    );
};

export default TrendAnalysisPanel;
