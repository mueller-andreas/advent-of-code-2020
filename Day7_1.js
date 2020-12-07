const fs = require("fs");

function createBagMap(filename) {
    const bags = fs.readFileSync(filename, 'utf8').split("\n");
    //Generate table with contained by information
    let containedBy = new Map();
    bags.forEach(line => {
        //console.log(line.slice(-11));
        if (!(line.slice(-11) === "other bags.")) {
            const lineArray = line.split(" bags contain ");
            const outsideBag = lineArray[0].replace(/\s/g,"");
            const insideBags = lineArray[1].slice(0, -1).split(", ");
            //console.log(outsideBag);
            //console.log(insideBags);
            insideBags.forEach(bagAndNum => {
                const splitted = bagAndNum.split(" ");
                const number = parseInt(splitted[0]);
                //console.log(splitted[0]);
                const bag = splitted[1] + splitted[2];
                //console.log(bag);
                if (containedBy.has(bag)) {
                    //console.log((containedBy.get(bag)));
                    //containedBy.set(bag, ((containedBy.get(bag)).push(outsideBag)));
                    containedBy.get(bag).push(outsideBag);
                } else {
                    containedBy.set(bag, [outsideBag]);
                    //console.log(containedBy);
                }
                //console.log(containedBy);
            });
        }
    });
    return containedBy;
}

function countOuterBags(bagMap) {
    let allBags = new Set();
    let queue = ["shinygold"];
    do{
        const bag = queue.shift();
        //console.log(!allBags.has(bag));
        //console.log(bag);
        if (!allBags.has(bag)) {
            if (bagMap.has(bag)) {
                (bagMap.get(bag)).forEach(outerBag => {
                    queue.push(outerBag);
                });
                //console.log(bagMap.get(bag));
                //console.log(queue);
                allBags.add(bag);
            } else {
                allBags.add(bag);
            }

        }
    } while (queue.length > 0);
    console.log(allBags.size);
    return allBags;
}


console.log(countOuterBags(createBagMap('./Input/Day7.txt')));