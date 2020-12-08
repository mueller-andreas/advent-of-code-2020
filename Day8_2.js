const fs = require("fs");

function operationCount(filename) {
    const operations = fs.readFileSync(filename, 'utf8').split("\n");
    let accumulator = 0;
    let i = 0;
    let checkpointOperation = -1;
    let checkpointAcc = -1;
    let checkpointReached = -1;
    let operationsReached = [];
    while(i < operations.length){
        operationsReached.push(i);
        const opSplit = operations[i].split(" ");
        const operation = opSplit[0];
        const argument = parseInt(opSplit[1]);
        switch(operation) {
            case "acc":
                accumulator += argument;
                i++;
            break;
            
            case "jmp": 
                if (checkpointOperation === -1) {
                    checkpointOperation = i + argument;
                    checkpointAcc = accumulator;
                    checkpointReached = operationsReached.length;
                    i++;
                } else {
                    i += argument;
                }

            break;

            case "nop":
                if (checkpointOperation === -1) {
                    checkpointOperation = i + 1;
                    checkpointAcc = accumulator;
                    checkpointReached = operationsReached.length;
                    i += argument;
                } else {
                    i++;
                }
            break;
            
            default:
                console.log("Default case reached");
        }
        if (operationsReached.includes(i)) {
            accumulator = checkpointAcc;
            i = checkpointOperation;
            operationsReached.splice(checkpointReached);
            checkpointAcc = -1;
            checkpointOperation = -1;
            checkpointReached = -1;
        }
    }
    return accumulator;
}

console.log(operationCount('./Input/Day8.txt'));
//console.log(operationCount('./Input/test.txt'));