const express = require('express');
const app = express();
const playstationRoute = express.Router();

// Playstation model
let Playstation = require('../model/Playstation');

// Add Playstation
playstationRoute.route('/add-playstation').post((req, res, next) => {
    Playstation.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all playstation
playstationRoute.route('/').get((req, res) => {
    Playstation.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single playstation
playstationRoute.route('/read-playstation/:id').get((req, res) => {
    Playstation.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update playstation
playstationRoute.route('/update-playstation/:id').put((req, res, next) => {
    Playstation.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('Playstation successfully updated!')
        }
    })
})

// Delete playstation
playstationRoute.route('/delete-playstation/:id').delete((req, res, next) => {
    Playstation.findByIdAndRemove(req.params.id, (error, data) => {
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