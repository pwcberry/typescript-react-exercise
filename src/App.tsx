import {useState, useReducer, useEffect} from "react";
import MetricPanel from "./components/MetricPanel";
import TrendAnalysisPanel from "./components/TrendAnalysisPanel";
import {MetricEvent} from "./types";
import {consumeEvent} from "./services/api";
import {formatTimestamp} from "./utils";
import Icon from "./components/Icon";
import logo from "./assets/logo.svg";
import "./App.css";

const DEFAULT_EVENT: MetricEvent = {
    visitors: 10,
    sales: 10,
    conversionRate: 0.1,
};

type ReducerAction = {
    type: string;
    occurredAt: Date;
    newEvent: MetricEvent;
}

const reducer = (state: MetricEvent[], action: ReducerAction) => {
    if (action.type === "update") {
        const newState = [...state, {...action.newEvent, timestamp: formatTimestamp(action.occurredAt)}];
        const dataSize = newState.length;

        // Maximum number of elements required for the graph is 10
        // Perhaps a small optimization?
        return dataSize > 10 ? newState.filter((_, i) => i >= (dataSize - 10)) : newState;
    }
    return state;
};

function App() {
    // The reduce will keep track of prior events
    const [seriesState, dispatch] = useReducer(reducer, [DEFAULT_EVENT]);

    // This will help to re-render the UI when there is another event
    const [metricEvent, setMetricEvent] = useState<MetricEvent>(DEFAULT_EVENT);

    useEffect(() => {
        const id = setTimeout(() => {
            const event = consumeEvent();
            dispatch({type: "update", occurredAt: new Date(), newEvent: metricEvent});
            setMetricEvent(event);
        }, 1000);
        return () => clearInterval(id);
    }, [metricEvent]);

    const previousEvent = seriesState.at(seriesState.length - 1);

    return (
        <main>
            <header className="header mb-8">
                <a href="https://zerocap.com" target="_blank" rel="noreferrer" className="inline-block mr-2">
                    <img src={logo} className="logo" alt="Vite logo"/>
                </a>
                <h1 className="text-3xl font-bold">Real-time Analytics Dashboard</h1>
                <span className="text-green-400 ml-auto"><Icon id="pulse"
                                                               className="icon-inline icon-sm mb-1 mr-0.5"/>{"Connected"}</span>
            </header>
            <MetricPanel value={metricEvent.visitors} previousValue={previousEvent!.visitors} title="Visitors"/>
            {/*<MetricPanel value={metricEvent.sales} previousValue={previousEvent!.sales} displayType="currency" title="Sales"/>*/}
            {/*<MetricPanel value={metricEvent.conversionRate} previousValue={previousEvent!.conversionRate} displayType="percent" title="Conversion Rate"/>*/}
            <TrendAnalysisPanel data={seriesState}/>
        </main>
    );
}

export default App;
