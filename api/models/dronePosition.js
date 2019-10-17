const constants = require('../util/constants');

function isEven(n) {
    return n % 2 == 0;
}

function getNextPositionLinear(drone) {
    const myDrone = drone;
    let slope = Number(drone.id.charAt(0)) / 10;
    const intercept = Number(drone.id.charAt(0)) / 10;
    myDrone.x += constants.STEP_SIZE
    if (isEven(slope)) {
        slope = -slope
    }
    myDrone.y = intercept + (slope * myDrone.x)

    return myDrone
}


exports.updatePositionByDrone = (drone) => {
    if (drone.typeOfMovement === constants.TYPE_OF_MOVEMENT_LINEAR) {
        return getNextPositionLinear(drone)
    }
};