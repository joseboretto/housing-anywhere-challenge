const droneModels = require("./../models/drone");
const logger = require("../config/logger")(module);

const {Drone} = droneModels;

module.exports = {
    async getAllDrones() {
        try {
            const result = await Drone.find();
            logger.debug(`dronePersistence: getAllDrones - success:` + result);
            return result;
        } catch (err) {
            logger.error(`dronePersistence: getAllDrones - error:` + err);
            throw err;
        }
    },
    async saveDrone(drone) {
        logger.debug("dronePersistence: saveDrone" + drone);
        try {
            const result = await drone.save();
            logger.debug(`dronePersistence: saveDrone - success:`);
            return result;
        } catch (err) {
            logger.error(`dronePersistence: saveDrone - error:` + err);
            throw err;
        }
    }
};