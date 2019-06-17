const mainPersistence = require('./mainPersistence');

const {drones} = mainPersistence

module.exports={
  getAllDrones(){
    return drones().find({})
  },
  saveDrone(drone){
    return drones().insert(drone)
  }
}