'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var body = require('body-parser');
var mongoose = require('mongoose');
var Promise = require('bluebird');


//icing/
var IcingModel = mongoose.model('Icing');
    router.post('/icing/create', function (req, res, next) {
        var Icing = new IcingModel(req.body);
        Icing.save(function (err, icing) {
            if(err) next(err);
            res.send(icing);
        });
    });
    router.post('/icing/:id', function (req, res, next) {
        IcingModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: false}, function (err, icing) {
            if(err) next(err);
            res.send(icing);
        });
    });
    router.get('/icing/delete/:id', function (req, res, next) {
        IcingModel.find({_id: req.params.id}).remove(function (err, data) {
            if(err) res.send(400);
            res.sendStatus(200);
        });
    });
    router.get('/icing', function (req, res, next) {
        IcingModel.find({}, function (err, icingArr) {
            if(err) next(err);
            res.send(icingArr);
        })
    });

//filling/
var FillingModel = mongoose.model('Filling');
    router.post('/filling/create', function (req, res, next) {
        var Filling = new FillingModel(req.body);
        Filling.save(function (err, filling) {
            if(err) next(err);
            res.send(filling);
        });
    });
    router.post('/filling/:id', function (req, res, next) {
        FillingModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: false}, function (err, filling) {
            if(err) next(err);
            res.send(filling);
        });
    });
    router.get('/filling/delete/:id', function (req, res, next) {
        FillingModel.find({_id: req.params.id}).remove(function (err, data) {
            if(err) res.send(400);
            res.sendStatus(200);
        });
    });
    router.get('/filling', function (req, res, next) {
        FillingModel.find({}, function (err, fillingArr) {
            if(err) next(err);
            res.send(fillingArr);
        })
    });

//shape/
var ShapeModel = mongoose.model('Shape');
    router.post('/shape/create', function (req, res, next) {
        var Shape = new ShapeModel(req.body);
        Shape.save(function (err, shape) {
            if(err) next(err);
            res.send(shape);
        });
    });
    router.post('/shape/:id', function (req, res, next) {
        ShapeModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: false}, function (err, shape) {
            if(err) next(err);
            res.send(shape);
        });
    });
    router.get('/shape/delete/:id', function (req, res, next) {
        ShapeModel.find({_id: req.params.id}).remove(function (err, data) {
            if(err) res.send(400);
            res.sendStatus(200);
        });
    });
    router.get('/shape', function (req, res, next) {
        ShapeModel.find({}, function (err, shapeArr) {
            if(err) next(err);
            res.send(shapeArr);
        })
    });

//cake/
var CakeModel = mongoose.model('Cake');
    router.post('/cake/create', function (req, res, next) {
        var Cake = new CakeModel(req.body);
        Cake.save(function (err, cake) {
            if(err) next(err);
            res.send(cake);
        });
    });
    router.post('/cake/:id', function (req, res, next) {
        CakeModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: false}, function (err, cake) {
            if(err) next(err);
            res.send(cake);
        });
    });
    router.get('/cake/delete/:id', function (req, res, next) {
        CakeModel.find({_id: req.params.id}).remove(function (err, data) {
            if(err) res.send(400);
            res.sendStatus(200);
        });
    });
    router.get('/cake', function (req, res, next) {
        CakeModel.find({type: 'stock'})
            .populate('shape','type description')
            .populate('icing','name description price')
            .populate('filling','name description price')
            .populate('reviews').exec(function (err, cakesArr){
                if(err) next(err);
                res.send(cakesArr);
        });
    });