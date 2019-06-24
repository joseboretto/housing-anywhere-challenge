const uuidv1 = require("uuid/v1");
const mongoose = require("mongoose");
/**
 * List all drones with ​ ID ​,​ quadrant ​ and ​ current position ​ (x, y float).
 * Position is relative to quadrant. ​ Current position ​ should change over time.
 * It’s up to you to use a random values or a ​ formula ​ that makes movement over
 * time look realistic.
 *
 *
 * // x, y are coords
 // (values sent as strings, but must be treated as floating point number)
 * */
const droneSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuidv1()
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  quadrant: {
    type: Number,
    required: true
  }
});

const Drone = mongoose.model("Drone", droneSchema);

module.exports.Drone = Drone;