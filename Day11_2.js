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
        //console.log(seatArray);
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
                    if (checkNeighbors(seatArray, i, j) >= 5) {
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
    console.log(seatArray);
    return [occupiedCount, count];
}

function checkLeft(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar;
    const column = columnPar - 1;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkLeft(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}

function checkRight(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar;
    const column = columnPar + 1;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkRight(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}

function checkTop(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar - 1;
    const column = columnPar;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkTop(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}

function checkBottom(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar + 1;
    const column = columnPar;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkBottom(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}

function checkLeftTop(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar - 1;
    const column = columnPar - 1;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkLeftTop(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}

function checkRightTop(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar - 1;
    const column = columnPar + 1;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkRightTop(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}

function checkLeftBot(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar + 1;
    const column = columnPar - 1;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkLeftBot(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}

function checkRightBot(seatArray, rowPar, columnPar) {
    let isOcc = false;
    const row = rowPar + 1;
    const column = columnPar + 1;
    if (isInRange(seatArray, row, column) && seatArray[row][column] === ".") {
        isOcc = checkRightBot(seatArray, row, column);
    }
    if (isInRange(seatArray, row, column) && seatArray[row][column] === "#") {
        isOcc = true;
    }
    return isOcc;
}


function checkNeighbors(seatArray, row, column) {
    let occupiedCount = 0;

    if (checkLeft(seatArray, row, column)) {
        occupiedCount++;
    }
    if (checkRight(seatArray, row, column)) {
        occupiedCount++;
    }
    if (checkTop(seatArray, row, column)) {
        occupiedCount++;
    }
    if (checkBottom(seatArray, row, column)) {
        occupiedCount++;
    }
    if (checkLeftBot(seatArray, row, column)) {
        occupiedCount++;
    }
    if (checkLeftTop(seatArray, row, column)) {
        occupiedCount++;
    }
    if (checkRightBot(seatArray, row, column)) {
        occupiedCount++;
    }
    if (checkRightTop(seatArray, row, column)) {
        occupiedCount++;
    }
    return occupiedCount;
}

function isInRange(array, row, column) {
    return row >= 0 && row < array.length && column >= 0 && column < array[row].length;
}

console.log(checkSeats('./Input/Day11.txt'));
//console.log(checkSeats('./Input/test.txt'));