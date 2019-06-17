const { body } = require("express-validator/check");
const express = require("express");
const dronesController = require("../controllers/dronesController");
const dronesValidation = require("../validations/dronesValidation");

const dronesRoute = express.Router();


/* GET users listing. */
dronesRoute.get("/", dronesController.getAllDrones);

dronesRoute.post(
  "/",
  dronesValidation.createDrone(),
  (req, res) => dronesController.createDrone(req, res)
);
module.exports = dronesRoute;
