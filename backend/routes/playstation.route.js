const express = require('express');
const app = express();
const playstationRoute = express.Router();

// Nintendo model
let PlayStation = require('../model/PlayStation');

// Add Nintendo
playstationRoute.route('/add-PlayStation').post((req, res, next) => {
    PlayStation.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all nintendo
playstationRoute.route('/').get((req, res) => {
    PlayStation.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single nintendo
playstationRoute.route('/read-playstation/:id').get((req, res) => {
    PlayStation.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update nintendo
playstationRoute.route('/update-playstation/:id').put((req, res, next) => {
    PlayStation.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('PlayStation successfully updated!')
        }
    })
})

// Delete nintendo
playstationRoute.route('/delete-playstation/:id').delete((req, res, next) => {
    PlayStation.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = playstationRoute;