const fs = require("fs");

function twentyTwenty (filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n");
    for (let i = 0; i < data.length; i++) {
        element1 = parseInt(data[i]);
        for (let j = i; j < data.length; j++){
            element2 = parseInt(data[j]);
            for (let k = j; k < data.length; k++) {
                element3 = parseInt(data[k]);
                if(element1+element2+element3 ===2020) {
                    return element1*element2*element3;
                }
            }
        }
    }
    return null;
}

console.log(twentyTwenty('./Input/Day1_1.txt'));