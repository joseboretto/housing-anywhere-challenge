const dronePersistence = require("../persistence/dronePersistence");
const logger = require("../config/logger")(module);
const Drone = require("../models/drone");


exports.createDrone = (req, res) => {
    logger.debug("dronesController: createDrone");
    const drone = new Drone.Drone({
        x: req.body.x,
        y: req.body.y,
        quadrant: req.body.quadrant,
        typeOfMovement: req.body.typeOfMovement
    });
    dronePersistence.saveDrone(drone)
        .then(() => {
            logger.debug(`dronesController: createDrone - success:` + result);
            res.send({success: drone});
        })
        .catch((err) => {
            logger.error(`dronesController: createDrone - error:` + err);
            res.status(422).json(err);
        });
};

exports.getAllDrones = (req, res) => {
    logger.debug("dronesController: getAllDrones");
    dronePersistence.getAllDrones()
        .then((x) => {
            logger.debug(`dronesController: getAllDrones - success:` + x);
            res.send(x);
        })
        .catch((err) => {
            logger.error(`dronesController: getAllDrones - error:` + err);
            res.status(422).json(err);
        });
};


