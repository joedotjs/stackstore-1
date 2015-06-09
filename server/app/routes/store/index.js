'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var body = require('body-parser');
var mongoose = require('mongoose');
var CakeModel = mongoose.model('Cake');
var Promise = require('bluebird');



router.get('/create', function (req, res, next) {
    console.log("you hit test create");
    CakeModel.create({
        name: "Test Cake",
        type : "Custom"
    }, function(err, cake){
        console.log("Test Cake created", cake);
        res.redirect("/");
    });
});


router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    // console.log(id);
    CakeModel.findOne({_id: id}, function (err, cake) {
        if(err) next(err);
        console.log('THE CAKE', cake);
        res.send(cake);
    });
    // CakeModel.findOne({_id: id}).exec()
    //     .then(function (err, cake) {
    //         if(err) next(err);
    //         console.log('THE CAKE', cake);
    //         res.send(cake);
    //     });
});



router.get('/', function (req, res, next) {
    CakeModel.find().exec()
        .then(function (err, cakesArr) {
            if(err) next(err);
            var cakelll = [{
        name: 'Barry White',
        type: 'stock',
        price: 135,
        shape: 'Round',
        icing: 'Vanilla',
        layers: 3
    },
    {
        name: 'Cool Breeze',
        type: 'stock',
        price: 145,
        shape: 'Round',
        icing: 'Mint',
        layers: 1
    },
    {
        name: 'Flat Top',
        type: 'stock',
        price: 55,
        shape: 'Square',
        icing: 'Vanilla',
        layers: 1
    },
    {
        name: 'Chocolate Monstar',
        type: 'custom',
        price: 135,
        shape: 'Square',
        icing: 'Chocolate',
        layers: 3
    }];
            console.log('CAKES ARR', cakelll);
            console.log('CAKES ARR', cakesArr);
            res.send(cakelll);
        });
});