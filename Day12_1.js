const { dir } = require("console");
const fs = require("fs");

function getRoute(filename) {
    const routeInput = fs.readFileSync(filename, 'utf8').split("\n");
    const NORTH = 0;
    const EAST = 1;
    const SOUTH = 2;
    const WEST = 3;

    let direction = EAST;
    let northDist = 0;
    let eastDist = 0;
    console.log(routeInput);

    routeInput.forEach(action => {
        let dirAction = action.slice(0, 1);
        let distAction = action.slice(1);

        switch(dirAction) {
            case "N":
                northDist += parseInt(distAction);
                break;

            case "E":
                eastDist += parseInt(distAction);
                break;

            case "S":
                northDist -= parseInt(distAction);
                break;

            case "W":
                eastDist -= parseInt(distAction);
                break;

            case "L":
                direction = Math.abs(4 + direction - distAction/90) % 4;
                break;

            case "R":
                direction = (direction + distAction/90) % 4;
                break;

            case "F":
                switch(direction) {
                    case NORTH:
                        northDist += parseInt(distAction);
                        break;
                    case EAST:
                        eastDist += parseInt(distAction);
                        break;
                    case SOUTH:
                        northDist -= parseInt(distAction);
                        break;
                    case WEST:
                        eastDist -= parseInt(distAction);
                        break;
                }
                break;
        }
    });
    return Math.abs(northDist) + Math.abs(eastDist)
}

console.log(getRoute('./Input/Day12.txt'));
//console.log(getRoute('./Input/test2.txt'));