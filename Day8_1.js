const fs = require("fs");

function operationCount(filename) {
    const operations = fs.readFileSync(filename, 'utf8').split("\n");
    let accumulator = 0;
    let i = 0;
    let operationsReached = new Set();
    operationsReached.add(i);
    while(true){
        const opSplit = operations[i].split(" ");
        const operation = opSplit[0];
        const argument = parseInt(opSplit[1]);
        switch(operation) {
            case "acc":
                accumulator += argument;
                i++;
            break;
            
            case "jmp": 
                i += argument;
            break;

            case "nop":
                i++;
            break;
            
            default:
                console.log("Default case reached");
        }
        if (operationsReached.has(i)) {
            return accumulator;
        }
        operationsReached.add(i);

    }
}

console.log(operationCount('./Input/Day8.txt'));