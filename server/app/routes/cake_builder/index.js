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
    
    var getData = function(model){

 	 	return model.find().exec()
    
    }

    Promise.all([getData(FillingModel), getData(IcingModel), getData(ShapeModel), getData(LayerModel), getData(ReviewModel)])
    .then(function(ingredients){

    	res.send(ingredients)

    })
});

router.post('/', function (req, res, next){

	console.log("hit cake post route")
	var cake = req.body
	delete cake.selectedNumLayers
	
	// res.send(cake)

	// var newCake = new CakeModel(cake);
	// newCake.save(function (err) {
	//   if (err) return next(err);
	//   // saved!
	//   console.log("custom cake was saved")
	// })

	CakeModel.create(cake, function (err, cake) {
		if (err) return next(err);
		console.log("custom cake was saved to database", cake)
		console.log("cake", cake)
		res.send(cake);

	})

})

// router.delete('/:name', function (req,res,next){

// 	console.log("hit delete route.  Here is the name", req.params.name)
// 	// CakeModel.findByIdAndRemove(req.params.id, function(err, cake){
// 	// 	console.log("Successfully removed cake")
// 	// })
// })