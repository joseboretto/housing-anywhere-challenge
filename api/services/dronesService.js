const dronePersistence = require('./../persistence/dronePersistence');

module.exports = {
  getAllDrones() {
    return dronePersistence.getAllDrones()
  },
  createDrone(drone){
    return dronePersistence.saveDrone(drone)
  }
}