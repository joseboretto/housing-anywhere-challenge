/* eslint-disable no-use-before-define */
const Loki = require("lokijs");

let drones;
let quadrants;


const db = new Loki("./database.json", {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000,
  autoupdate: true
});


// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  drones = db.getCollection("drones");
  if (drones === null) {
    drones = db.addCollection("drones");
  }
  console.log(`number of drones in database : ${drones.count()}`);
  quadrants = db.getCollection("quadrants");
  if (quadrants === null) {
    quadrants = db.addCollection("quadrants");
  }
  console.log(`number of quadrants in database : ${quadrants.count()}`);
}

exports.db = db;
exports.drones = () => { return drones};
exports.quadrants = () => { return quadrants};

