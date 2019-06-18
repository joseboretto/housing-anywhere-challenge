const numberMsg = "Numeric min: -10 and max: 10";
const isFloarOpt = {
  min: 0
};
const { body } = require("express-validator/check");

exports.createDrone = () => {
  return [
    [
      body("x").isFloat(isFloarOpt).withMessage(numberMsg),
      body("y").isFloat(isFloarOpt).withMessage(numberMsg),
      body("quadrant").isFloat(isFloarOpt).withMessage(numberMsg)
    ]
  ];
};
