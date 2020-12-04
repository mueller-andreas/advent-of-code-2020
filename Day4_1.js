const fs = require("fs");

function passport(filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n\n");
    let invalid = 0;
    let valid = 0;
    let fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
    data.forEach(line => {
        const lineSplit = line.split(/[ ,\n]+/);
        if (lineSplit.length == 8) {
            valid++;
        } else if (lineSplit.length == 7){
            let hasCid = false;
            lineSplit.forEach(element => {
                if(element.split(":")[0] === "cid") {
                    hasCid = true;
                }
            })
            //console.log(fields + "\n");
            hasCid ? invalid++ : valid++;
        } else {
            invalid++;
        }
    })
    console.log("valid:" + valid);
    console.log("invalid: " + invalid);
}

passport('./Input/Day4.txt');
