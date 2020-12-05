const fs = require("fs");

function passport(filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n\n");
    let invalid = 0;
    let valid = 0;
    let fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
    let colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    data.forEach(line => {
        const lineSplit = line.split(/[ ,\n]+/);
        if (lineSplit.length == 8) {
            let isValid = true;
            lineSplit.forEach(element => {
                let field = element.split(":");
                let value = field[1];
                switch (field[0]) {
                    case "byr":
                        if (parseInt(value) < 1920 || parseInt(value) > 2002 || value.length != 4) {
                            isValid = false;
                        }
                        break;
                        
                    case "iyr":
                        if (parseInt(value) < 2010 || parseInt(value) > 2020 || value.length != 4) {
                            isValid = false;
                        }                        
                        break;

                    case "eyr":
                        if (parseInt(value) < 2020 || parseInt(value) > 2030 || value.length != 4) {
                            isValid = false;
                        }              
                        break;

                    case "hgt":
                        let unit = value.slice(-2);
                        let height = value.slice(0, -2);
                        if (unit === "cm") {
                            if (parseInt(height) < 150 || parseInt(value) > 193) {
                                isValid = false;
                            }  
                        }
                        if (unit === "in") {
                            if (parseInt(height) < 59 || parseInt(height) > 76) {
                                isValid = false;
                            } 
                        }
                        if (unit != "cm" && unit != "in") {
                            isValid = false;
                        }
                        break;
                    
                    case "hcl":
                        if (value[0] != "#" || value.length != 7 || value.slice(1).match(/^[0-9a-zA-Z]+$/) == null) {
                            isValid = false;
                        }
                        break;
                            
                    case "ecl":
                        if (!colors.includes(value)) {
                            isValid = false;
                        }
                        break;
    
                    case "pid":
                        if (value.length != 9 || value.match(/^[0-9]+$/) == null) {
                            isValid = false;
                        }
                        break;

                    default:

                }
            });
            isValid ? valid++ : invalid++;
        } else if (lineSplit.length == 7){
            let hasCid = false;
            lineSplit.forEach(element => {
                if(element.split(":")[0] === "cid") {
                    hasCid = true;
                }
            });
            //console.log(fields + "\n");
            if (hasCid) {
                invalid++;
            } else {
                let isValid = true;
                lineSplit.forEach(element => {
                    let field = element.split(":");
                    let value = field[1];
                    switch (field[0]) {
                        case "byr":
                            if (parseInt(value) < 1920 || parseInt(value) > 2002 || value.length != 4) {
                                isValid = false;
                            }
                            break;
                            
                        case "iyr":
                            if (parseInt(value) < 2010 || parseInt(value) > 2020 || value.length != 4) {
                                isValid = false;
                            }                        
                            break;
    
                        case "eyr":
                            if (parseInt(value) < 2020 || parseInt(value) > 2030 || value.length != 4) {
                                isValid = false;
                            }              
                            break;
    
                        case "hgt":
                            let unit = value.slice(-2);
                            let height = value.slice(0, -2);
                            if (unit === "cm") {
                                if (parseInt(height) < 150 || parseInt(value) > 193) {
                                    isValid = false;
                                }  
                            }
                            if (unit === "in") {
                                if (parseInt(height) < 59 || parseInt(height) > 76) {
                                    isValid = false;
                                } 
                            }
                            if (unit != "cm" && unit != "in") {
                                isValid = false;
                            }
                            break;
                        
                        case "hcl":
                            if (value[0] != "#" || value.length != 7 || value.slice(1).match(/^[0-9a-zA-Z]+$/) == null) {
                                isValid = false;
                            }
                            break;
                                
                        case "ecl":
                            if (!colors.includes(value)) {
                                isValid = false;
                            }
                            break;
        
                        case "pid":
                            if (value.length != 9 || value.match(/^[0-9]+$/) == null) {
                                isValid = false;
                            }
                            break;
    
                        default:
    
                    }
                });
                isValid ? valid++ : invalid++;
            }
        } else {
            invalid++;
        }
    })
    console.log("valid:" + valid);
    console.log("invalid: " + invalid);
}

passport('./Input/Day4.txt');
