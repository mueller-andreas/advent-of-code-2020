const fs = require("fs");

function checkSeats(filename) {
    const seats = fs.readFileSync(filename, 'utf8').split("\n");
    let seatArray = [];

    //let changeCount = 0;
    let occupiedCount = 0;
    let hasChanged = true;
    seats.forEach(row => {
        seatArray.push(row.split(""));
    });
    let secondArray = JSON.parse(JSON.stringify(seatArray));
    while (hasChanged) {
        hasChanged = false;
        for (let i = 0; i < seatArray.length; i++) {
            for (let j = 0; j < seatArray[i].length; j++) {
                if (seatArray[i][j] === "L") {
                    if (checkNeighbors(seatArray, i, j) === 0) {
                        secondArray[i][j] = "#";
                        hasChanged = true;
                        occupiedCount++;
                    }
                } else if (seatArray[i][j] === "#") {
                    if (checkNeighbors(seatArray, i, j) >= 4) {
                        secondArray[i][j] = "L";
                        hasChanged = true;
                        occupiedCount--;
                    }
                }
            }
        }
        seatArray = JSON.parse(JSON.stringify(secondArray));
    }
    let count = 0;

    for (let i = 0; i < seatArray.length; i++) {
        for (let j = 0; j < seatArray[i].length; j++) {
            if (seatArray[i][j] === "#") {
                count++;
            }
        }
    }
    //console.log(seatArray);
    return [occupiedCount, count];
}

function checkNeighbors(seatArray, row, column) {
    let emptyCount = 0;
    if (isInRange(seatArray, row - 1, column) && seatArray[row - 1][column] === "#") {
        emptyCount++;
    }
    if (isInRange(seatArray, row, column - 1) && seatArray[row][column - 1] === "#") {
        emptyCount++;
    }
    if (isInRange(seatArray, row - 1, column - 1) && seatArray[row - 1][column - 1] === "#") {
        emptyCount++;
    }
    if (isInRange(seatArray, row + 1, column) && seatArray[row + 1][column] === "#") {
        emptyCount++;
    }
    if (isInRange(seatArray, row, column + 1) && seatArray[row][column + 1] === "#") {
        emptyCount++;
    }
    if (isInRange(seatArray, row + 1, column + 1) && seatArray[row + 1][column + 1] === "#") {
        emptyCount++;
    }
    if (isInRange(seatArray, row - 1, column + 1) && seatArray[row - 1][column + 1] === "#") {
        emptyCount++;
    }
    if (isInRange(seatArray, row + 1, column - 1) && seatArray[row + 1][column - 1] === "#") {
        emptyCount++;
    }
    return emptyCount;
}

function isInRange(array, row, column) {
    return row >= 0 && row < array.length && column >= 0 && column < array[row].length;
}

console.log(checkSeats('./Input/Day11.txt'));