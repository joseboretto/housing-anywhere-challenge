const uuidv1 = require('uuid/v1');
module.exports = class Drone {
    constructor({id = uuidv1(), x, y, quadrant} = {}) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.quadrant = quadrant;
    }
}