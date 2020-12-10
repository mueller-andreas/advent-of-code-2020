const fs = require("fs");

function encodingCheck(filename) {
    const numbers = fs.readFileSync(filename, 'utf8').split("\n");
    let sumPossibles = [];
    let l = 24;
    //console.log(sumPossibles);
    do {
        l++;
        sumPossibles = [];
        let k = 25;
        for (let i = l - 25; i < l; i++) {
            for (let j = 1; j < k; j++) {
                sumPossibles.push(parseInt(numbers[i]) + parseInt(numbers[i + j]));
                //console.log("kombo:" + (i+j));
                //console.log("i: " + i);
                //console.log("j: " + j);
            }
            k--;
        }
        
        //console.log(sumPossibles);
        //console.log(l);
        //console.log(numbers[l]);
    } while (sumPossibles.includes(parseInt(numbers[l])));
    console.log(sumPossibles);
    console.log(l);
    console.log(sumPossibles.length);
    return numbers[l];
}

console.log(encodingCheck('./Input/Day9.txt'));
//console.log(encodingCheck('./Input/test.txt'));