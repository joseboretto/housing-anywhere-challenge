const dronesService = require("../services/dronesService");
const utilsValidation = require("../validations/utilsValidation");

const Drone = require("../models/drone");


exports.createDrone = (req, res) => {
  utilsValidation.requestValidation(req, res).then(() => {
      const drone = new Drone({ x: req.body.x, y: req.body.y, quadrant: undefined });
      dronesService.createDrone(drone);
      res.send({ status: "SUCCESS" });
    }
  ).catch(() => {
    return res;
  });

};

exports.getAllDrones = (req, res) => {
  res.send(dronesService.getAllDrones());
};


