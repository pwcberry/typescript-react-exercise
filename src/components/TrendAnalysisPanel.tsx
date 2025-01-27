import {useState} from "react";
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";
import {MetricEvent} from "../types";

type Props = {
    data: MetricEvent[];
}

const TrendAnalysisPanel = ({data}: Props): React.JSX.Element => {
    const [graphView, setGraphView] = useState("conversionRate");

    const handleSelection = ({target}: { target: EventTarget }) => {
        console.log("handleSelection", target);
        setGraphView((target as HTMLSelectElement).value);
    };

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
            <div>
                <LineChart data={data} width={500} height={300}>
                    <XAxis dataKey="timestamp"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line dataKey={graphView} type="monotone" stroke="#8884d8"/>
                </LineChart>
            </div>
        </section>
    );
};

export default TrendAnalysisPanel;
