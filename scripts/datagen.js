/**
 * A script to generate a JSON file that contains data points that simulate
 * a sequence of events for the purposes of this exercise.
 *
 * Input: Number of events to generate; default is 10.
 */
import fs from 'node:fs';
import path from 'node:path';
import { argv } from 'node:process';

const DEST_FILE = path.join(import.meta.dirname, "../src/data/live-stream.json");

const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min)) + min;
const getRandomPercentage = (min, max) => {
    let percentage;
    do {
        percentage = Math.random();
    } while (percentage < min || percentage > max);
    return percentage;
};

let MAX_EVENTS = 10;

if (argv.length === 3) {
    MAX_EVENTS = parseInt(argv[2], 10);
}

const result = [];

for (let i = 0; i < MAX_EVENTS; i++) {
    result.push({
        visitors: getRandomInt(100, 20),
        sales: getRandomInt(1000, 50),
        conversionRate: getRandomPercentage(0.005, 0.15),
    });
}

fs.writeFileSync(DEST_FILE, JSON.stringify(result, null, 2));

console.log('Data generated.');
