const uuidv1 = require("uuid/v1");

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
module.exports = class Drone {
  constructor({ id = uuidv1(), x, y, quadrant } = {}) {
    this.id = id;
    this.quadrant = quadrant;
    this.x = parseInt(x, 10).toFixed(2).toString();
    this.y = parseInt(y, 10).toFixed(2).toString();
  }
};