const { dir } = require("console");
const fs = require("fs");

function getRoute(filename) {
    const routeInput = fs.readFileSync(filename, 'utf8').split("\n");
    const NINETY = 1;
    const ONEEIGHTY = 2;
    const TWOSEVENTY = 3;

    let northDist = 0;
    let eastDist = 0;
    let waypointNorth = 1;
    let waypointEast = 10;

    let tmp = 0;
    let direction = 0;

    routeInput.forEach(action => {
        let dirAction = action.slice(0, 1);
        let distAction = action.slice(1);

        switch(dirAction) {
            case "N":
                waypointNorth += parseInt(distAction);
                break;

            case "E":
                waypointEast += parseInt(distAction);
                break;

            case "S":
                waypointNorth -= parseInt(distAction);
                break;

            case "W":
                waypointEast -= parseInt(distAction);
                break;

            case "L":
                direction = distAction/90;
                switch(direction) {
                    case NINETY:
                        tmp = waypointNorth;
                        waypointNorth = waypointEast;
                        waypointEast = - tmp;
                        break;
                    case ONEEIGHTY:
                        waypointNorth = - waypointNorth;
                        waypointEast = - waypointEast;
                        break;
                    case TWOSEVENTY:
                        tmp = waypointNorth;
                        waypointNorth = - waypointEast;
                        waypointEast = tmp;
                        break;
                }
                break;

            case "R":
                direction = distAction/90;
                switch(direction) {
                    case NINETY:
                        tmp = waypointNorth;
                        waypointNorth = - waypointEast;
                        waypointEast = tmp;
                        break;
                    case ONEEIGHTY:
                        waypointNorth = - waypointNorth;
                        waypointEast = - waypointEast;
                        break;
                    case TWOSEVENTY:
                        tmp = waypointNorth;
                        waypointNorth = waypointEast;
                        waypointEast = - tmp;
                        break;
                }
                break;

            case "F":
                northDist += waypointNorth*distAction;
                eastDist += waypointEast*distAction;
                break;
        }
    });
    return Math.abs(northDist) + Math.abs(eastDist)
}



console.log(getRoute('./Input/Day12.txt'));
//console.log(getRoute('./Input/test2.txt'));