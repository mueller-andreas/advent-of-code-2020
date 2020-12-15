const fs = require("fs");

function getBus(filename) {
    const input = fs.readFileSync(filename, 'utf8').split("\n");
    const departureTime = parseInt(input[0]);
    const busLines = input[1].split(/[x,]+/);
    let minWaiting = Infinity;
    let busId = 0;
    busLines.forEach(busLine => {
        const currentWaiting = (Math.ceil(departureTime/parseInt(busLine))*busLine) - departureTime;
        if (minWaiting > currentWaiting) {
            minWaiting = currentWaiting;
            busId = busLine;
        }
        //console.log((Math.ceil(departureTime/parseInt(busLine))*busLine) - departureTime);
    });
    console.log(busId + " " + minWaiting);
    return busId*minWaiting;
}

console.log(getBus('./Input/Day13.txt'));