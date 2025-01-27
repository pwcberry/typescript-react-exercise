# Solution

There are four panels in the proposed UI design. The top three panels can be defined as components that manage their 
own state. 

The bottom panel is its own component that will contain the Rechart code.

To begin with, the data will be quite simple, and served from a JSON file.

State between data stream events will be kept. Calculations from the previous values will be made on consumption of 
another event.

The mock data is generated by the script at `scripts/datagen.js`. It can be run by:

```shell
npm run generate
```


