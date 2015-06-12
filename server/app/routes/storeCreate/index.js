var router = require('express').Router();
module.exports = router;
var body = require('body-parser');
var mongoose = require('mongoose');
var Promise = require('bluebird');

var StoreModel = mongoose.model('Store');
var IcingModel = mongoose.model('Icing');
var ShapeModel = mongoose.model('Shape');
var FillingModel = mongoose.model('Filling');

router.get('/store/new', function (req, res, next) {
	var d = req.body;
    var store = new StoreModel();
    store.name = d.name;
    store.description = d.description;
    store.owner = req.user._id;
    store.save().then(function (store) {

    });
});


var createDefaults = function(storeId) {
	var shapeArr = [
		{name: 'Round', description: 'Round Cake Shape Description'},
		{name: 'Square', description: 'Square Cake Shape Description'},
		{name: 'Rectangle', description: 'Rectangle Cake Shape Description'}];

	var fillingArr = [
		{name: 'chocolate', description: 'chocolate description', price: 20},
		{name: 'vanilla', description: 'vanilla description', price: 30 },
		{name: 'strawberry', description: 'strawberry description', price: 40 }];

    var icingArr = [
    	{name: 'chocolate', description: 'chocolate description', price: 5 },
    	{name: 'vanilla', description: 'vanilla description', price: 10 },
    	{name: 'strawberry', description: 'strawberry description', price: 15 }];

	ShapeModel.create({name: 'Round', description: 'Round Cake Shape Description'})
}