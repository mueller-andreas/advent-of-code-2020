const fs = require("fs");

function getAdapterArray(filename) {
    const adapters = fs.readFileSync(filename, 'utf8').split("\n");
    let adaptersInt = [];
    adapters.forEach(adapter => {
        adaptersInt.push(parseInt(adapter));
    });
    adaptersInt.sort((a, b) => a - b);
    adaptersInt.push(adaptersInt[adaptersInt.length - 1] + 3)
    adaptersInt.unshift(0);
    console.log(adaptersInt);
    return getCombinationCount(adaptersInt);
}

function getCombinationCount(adaptersInt) {
    let groupSize = 1;
    let combinations = 1;
    for(let i = 0; i < adaptersInt.length - 1; i++) {
        if(adaptersInt[i + 1] === adaptersInt[i] + 3) {
            switch(groupSize) {
                case 3:
                    combinations *= 2;
                    break;
                case 4: 
                    combinations *= 4;
                    break;
                case 5: 
                    combinations *= 7;
                    break;
                case 6:
                    combinations *= 12;
                    break;
                default: 
                    //console.log("Groupsize: " + groupSize);
            }
            console.log("Groupsize: " + groupSize);
            groupSize = 1;
        } else {
            groupSize++;
        }
    }
    return combinations;
}
console.log(getAdapterArray('./Input/Day10.txt'));
//console.log(getAdapterArray('./Input/test2.txt'));