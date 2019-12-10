const constants = require("../util/constants");
const logger = require("../config/logger")(module);


function getNextQuadrant(drone) {
  logger.debug(`getNextQuadrant, drone ${drone}`);
  const myDrone = drone;
  if (myDrone.x > 100) {
    if (myDrone.quadrant === 1) {
      myDrone.quadrant = 4;
    }
    if (myDrone.quadrant === 2) {
      myDrone.quadrant = 3;
    }
    if (myDrone.quadrant === 3) {
      myDrone.quadrant = 2;
    }
    if (myDrone.quadrant === 4) {
      myDrone.quadrant = 1;
    }
    myDrone.x = 100;
    myDrone.xPositiveSign = false;
  } else if (myDrone.x < 0) {
    if (myDrone.quadrant === 1) {
      myDrone.quadrant = 4;
    }
    if (myDrone.quadrant === 2) {
      myDrone.quadrant = 3;
    }
    if (myDrone.quadrant === 3) {
      myDrone.quadrant = 2;
    }
    if (myDrone.quadrant === 4) {
      myDrone.quadrant = 1;
    }
    myDrone.x = 0;
    myDrone.xPositiveSign = true;
  }
  if (myDrone.y > 100) {
    if (myDrone.quadrant === 1) {
      myDrone.quadrant = 2;
    }
    if (myDrone.quadrant === 2) {
      myDrone.quadrant = 1;
    }
    if (myDrone.quadrant === 3) {
      myDrone.quadrant = 4;
    }
    if (myDrone.quadrant === 4) {
      myDrone.quadrant = 3;
    }
    myDrone.y = 100;
    myDrone.yPositiveSign = false;

  } else if (myDrone.y < 0) {
    if (myDrone.quadrant === 1) {
      myDrone.quadrant = 4;
    }
    if (myDrone.quadrant === 2) {
      myDrone.quadrant = 3;
    }
    if (myDrone.quadrant === 3) {
      myDrone.quadrant = 4;
    }
    if (myDrone.quadrant === 4) {
      myDrone.quadrant = 3;
    }
    myDrone.y = 0;
    myDrone.yPositiveSign = true;
  }
  return myDrone;
}

function getNextPositionLinear(drone) {
  const myDrone = drone;
  let STEP_SIZE = drone.randomNumber / 2;
  let slope = drone.randomNumber / 10; // THIS IS AN IMPORTANT NUMBER
  const intercept = drone.randomNumber / 2;
  if (!drone.xPositiveSign) {
    STEP_SIZE = -STEP_SIZE;
  }
  if (!drone.yPositiveSign) {
    slope = -slope;
  }
  myDrone.x += STEP_SIZE;
  myDrone.y = intercept + (slope * (myDrone.x));
  logger.debug(`getNextPositionLinear ${myDrone}`);
  return getNextQuadrant(myDrone);
}


exports.updatePositionByDrone = (drone) => {
  if (drone.typeOfMovement === constants.TYPE_OF_MOVEMENT_LINEAR) {
    return getNextPositionLinear(drone);
  }
  return null;
};