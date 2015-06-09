'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var body = require('body-parser');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var CakeModel = mongoose.model('Cake');

var IcingModel = mongoose.model('Icing');
var FillingModel = mongoose.model('Filling');
var LayerModel = mongoose.model('Layer');
var ShapeModel = mongoose.model('Shape');
var ReviewModel = mongoose.model('Review');



router.get('/', function (req, res, next) {
    
    console.log("you hit build a cake");

    var getData = function(model){

 	 	return model.find().exec()
    
    }


    Promise.all([getData(FillingModel), getData(IcingModel), getData(ShapeModel), getData(LayerModel), getData(ReviewModel)])
    .spread(function (fillings, icings, shapes, layers, reviews) {
	    res.send(fillings, icings, shapes, layers, reviews);
    })


    // CakeModel.create({
    //     name: "Test Cake",
    //     type : "Custom"
    // }, function(err, cake){
    //     console.log("Test Cake created", cake);
    //     res.redirect("/");
    // });

	// res.redirect("/");
});