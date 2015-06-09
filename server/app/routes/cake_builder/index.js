'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var body = require('body-parser');
var mongoose = require('mongoose');
var CakeModel = mongoose.model('Cake');
var IcingModel = mongoose.model('Icing');
var FillingModel = mongoose.model('Filling');
var LayerModel = mongoose.model('Layer');
var ShapeModel = mongoose.model('Shape');
var Promise = require('bluebird');

