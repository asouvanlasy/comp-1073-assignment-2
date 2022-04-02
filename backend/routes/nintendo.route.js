const express = require('express');
const app = express();
const nintendoRoute = express.Router();

// Nintendo model
let Nintendo = require('../model/Nintendo');

// Add Nintendo
nintendoRoute.route('/add-nintendo').post((req, res, next) => {
    Nintendo.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all nintendo
nintendoRoute.route('/').get((req, res) => {
    Nintendo.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single nintendo
nintendoRoute.route('/read-nintendo/:id').get((req, res) => {
    Nintendo.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update nintendo
nintendoRoute.route('/update-nintendo/:id').put((req, res, next) => {
    Nintendo.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('Nintendo successfully updated!')
        }
    })
})

// Delete nintendo
nintendoRoute.route('/delete-nintendo/:id').delete((req, res, next) => {
    Nintendo.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = nintendoRoute;