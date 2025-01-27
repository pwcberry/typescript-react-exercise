import {useState, useReducer, useEffect} from "react";
import MetricPanel from "./components/MetricPanel";
import {MetricEvent} from "./types.ts";
import {consumeEvent} from "./services/api.ts";
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
    newState: MetricEvent;
}

const reducer = (state: MetricEvent, action: ReducerAction) => {
    if (action.type === "update") {
        return action.newState;
    }
    return state;
};

function App() {
    const [previousEvent, dispatch] = useReducer(reducer, DEFAULT_EVENT);
    const [metricEvent, setMetricEvent] = useState<MetricEvent>(DEFAULT_EVENT);

    useEffect(() => {
        const id = setTimeout(() => {
            const event = consumeEvent();
            dispatch({type: "update", newState: metricEvent});
            setMetricEvent(event);
        }, 1000);
        return () => clearInterval(id);
    }, [metricEvent]);

    return (
        <main>
            <header className="header mb-8">
                <a href="https://zerocap.com" target="_blank" rel="noreferrer" className="inline-block mr-2">
                    <img src={logo} className="logo" alt="Vite logo"/>
                </a>
                <h1 className="text-3xl font-bold">Real-time Analytics Dashboard</h1>
                <span className="text-green-400 ml-auto"><Icon id="pulse" className="icon-inline icon-sm"/>{"Connected"}</span>
            </header>
            <MetricPanel value={metricEvent.visitors} previousValue={previousEvent.visitors} title="Visitors"/>
            <MetricPanel value={metricEvent.sales} previousValue={previousEvent.sales} displayType="currency" title="Sales"/>
            <MetricPanel value={metricEvent.conversionRate} previousValue={previousEvent.conversionRate} displayType="percent" title="Conversion Rate"/>
        </main>
    );
}

export default App;
