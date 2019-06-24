const express = require("express");
const dronesController = require("../controllers/dronesController");

const dronesRoute = express.Router();


/* GET users listing. */
dronesRoute.get("/", dronesController.getAllDrones);

dronesRoute.post(
  "/", (req, res) => dronesController.createDrone(req, res)
);
module.exports = dronesRoute;
