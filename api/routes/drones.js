var Drone = require('../models/drone');
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(new Drone({x: 1, y: 2, quadrant: 10}));
});

module.exports = router;
