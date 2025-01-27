/**
 * This is a mock service that would normally have a connection to a back-end service
 */
import data from "../data/live-stream.json";

const LIMIT = data.length;
let counter = 0;

export const consumeEvent = () => {
    if (counter >= LIMIT) {
        counter = 0;
    }
    const event = data[counter];
    counter += 1;
    return event;
};
