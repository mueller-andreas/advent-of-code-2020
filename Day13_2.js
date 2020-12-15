const fs = require("fs");

function getBus(filename) {
    const input = fs.readFileSync(filename, 'utf8').split("\n");
    const busLines = input[1].split(",");
    let i = 0;
    let k = 0;
    let busArray = [];
    let koeffArray = [];
    for (let j = 0; j < busLines.length; j++) {
        if (busLines[j] !== "x") {
            busArray.push([parseInt(busLines[j]), j]);
        }
    }
    let timestamp = 1;
    console.log(busArray);
    //koeffArray.push([busArray[0][0], 6]);
    while(i !== busArray.length) {
        //console.log(busLines[i]);
        const busLine = busArray[i][0];
        const busOffset = busArray[i][1];
        if ((timestamp + busOffset) % busLine === 0) {
            //i++;
            //koeffArray.push([busLine, (timestamp + busOffset) / busLine]);
            koeffArray.push([busArray[i][0], 0])
            console.log(koeffArray);
            i++;
        } else {
            timestamp = recursiveTry(koeffArray, 0);
        }
    }
    return timestamp;
}

function recursiveTry(koeffArray, i) {
    if (i === koeffArray.length) {
        return 0;
    }
    const busLine = koeffArray[i][0];
    const currentKoeff = koeffArray[i][1];
    if (i === koeffArray.length - 1) {
        koeffArray[i][1] = currentKoeff + 1;
        return busLine * (currentKoeff + 1);
    }
    return busLine * (currentKoeff + (recursiveTry(koeffArray, i + 1)));
}

console.log(getBus('./Input/Day13.txt'));
//console.log(getBus('./Input/test.txt'));
//console.log(getBus('./Input/test2.txt'));