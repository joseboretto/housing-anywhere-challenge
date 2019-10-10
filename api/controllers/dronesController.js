const dronePersistence = require("../persistence/dronePersistence");
const logger = require("../config/logger")(module);
const Drone = require("../models/drone");


exports.createDrone = (req, res) => {
    logger.debug(" createDrone");
    const drone = new Drone.Drone({
        x: req.body.x,
        y: req.body.y,
        quadrant: req.body.quadrant,
        typeOfMovement: req.body.typeOfMovement
    });
    dronePersistence.saveDrone(drone)
        .then(() => {
            logger.debug(` createDrone - success:`);
            res.send({success: drone});
        })
        .catch((err) => {
            logger.error(` createDrone - error:` + err);
            res.status(422).json(err);
        });
};

exports.getAllDrones = (req, res) => {
    //logger.debug(" getAllDrones");

    dronePersistence.getAllDrones()
        .then((x) => {
            //logger.debug(` getAllDrones - success:`);
            res.send(x);
        })
        .catch((err) => {
            logger.error(` getAllDrones - error:` + err);
            res.status(422).json(err);
        });
};


