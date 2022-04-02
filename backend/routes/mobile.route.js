const express = require('express');
const app = express();
const mobileRoute = express.Router();

// Mobile model
let Mobile = require('../model/Mobile');

// Add Mobile
mobileRoute.route('/add-mobile').post((req, res, next) => {
    Mobile.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all mobile
mobileRoute.route('/').get((req, res) => {
    Mobile.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single mobile
mobileRoute.route('/read-mobile/:id').get((req, res) => {
    Mobile.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update mobile
mobileRoute.route('/update-mobile/:id').put((req, res, next) => {
    Mobile.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('Mobile successfully updated!')
        }
    })
})

// Delete mobile
mobileRoute.route('/delete-mobile/:id').delete((req, res, next) => {
    Mobile.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = mobileRoute;