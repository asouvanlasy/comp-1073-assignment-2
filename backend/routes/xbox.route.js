const express = require('express');
const app = express();
const xboxRoute = express.Router();

// Xbox model
let Xbox = require('../model/Xbox');

// Add Xbox
xboxRoute.route('/add-xbox').post((req, res, next) => {
    Xbox.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all xbox
xboxRoute.route('/').get((req, res) => {
    Xbox.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single xbox
xboxRoute.route('/read-xbox/:id').get((req, res) => {
    Xbox.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update xbox
xboxRoute.route('/update-xbox/:id').put((req, res, next) => {
    Xbox.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('Xbox successfully updated!')
        }
    })
})

// Delete xbox
xboxRoute.route('/delete-xbox/:id').delete((req, res, next) => {
    Xbox.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = xboxRoute;