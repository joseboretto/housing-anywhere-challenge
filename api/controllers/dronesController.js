const dronePersistence = require("../persistence/dronePersistence");
const logger = require("../config/logger");
const Drone = require("../models/drone");


exports.createDrone = (req, res) => {
  logger.debug("createDrone");
  const drone = new Drone.Drone({ x: req.body.x, y: req.body.y, quadrant: req.body.quadrant });
  dronePersistence.saveDrone(drone)
    .then(() => {
      res.send({ success: drone });
    })
    .catch((err) => {
      res.status(422).json(err);
    });
};

exports.getAllDrones = (req, res) => {
  res.send(dronePersistence.getAllDrones());
};


