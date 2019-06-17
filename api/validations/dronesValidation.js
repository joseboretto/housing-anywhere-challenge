const { body } = require("express-validator/check");

exports.createDrone = () => {
  return [
    [
      body("x").isNumeric(),
      body("y").isNumeric()
    ]
  ];
};
