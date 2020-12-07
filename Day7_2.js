const fs = require("fs");

function createBagMap(filename) {
    const bags = fs.readFileSync(filename, 'utf8').split("\n");
    //Generate table with contains information
    let contains = new Map();
    bags.forEach(line => {
        const lineArray = line.split(" bags contain ");
        const outsideBag = lineArray[0].replace(/\s/g,"");
        if (!(line.slice(-11) === "other bags.")) {
            const insideBags = lineArray[1].slice(0, -1).split(", ");
            contains.set(outsideBag, insideBags);
        } else {
            contains.set(outsideBag, []);
        }
    });
    return contains;
}

function countInnerBagsStart(bagMap) {
    return countInnerBags(bagMap, "shinygold") - 1;
}

function countInnerBags(bagMap, outerBag) {
    let sum = 1;
    const innerBagsArray = bagMap.get(outerBag);
    console.log(innerBagsArray);
    console.log(outerBag);

    innerBagsArray.forEach(bagAndNum => {
        const splitted = bagAndNum.split(" ");
        const number = parseInt(splitted[0]);
        //console.log(splitted[0]);
        const innerBag = splitted[1] + splitted[2];
        sum += number * countInnerBags(bagMap, innerBag);
    });
    console.log(sum);
    return sum;
}


console.log(countInnerBagsStart(createBagMap('./Input/Day7.txt')));
//console.log(createBagMap('./Input/Day7.txt'));