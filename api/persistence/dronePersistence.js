const droneModels = require("./../models/drone");
const logger = require("../config/logger");

const { Drone } = droneModels;

module.exports = {
  async getAllDrones() {
    const result = await Drone.find();
    return result;
  },
  async saveDrone(drone) {
    logger.debug("saveDrone");
    try {
      const result = await drone.save();
      logger.debug(`saveDrone - success:`);
      return result;
    } catch (err) {
      logger.error(`saveDrone - error:`);
      throw err;
    }
  }
};