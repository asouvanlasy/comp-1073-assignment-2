const express = require('express');
const app = express();
const PCRoute = express.Router();

// PC model
let PC = require('../model/PC');

// Add PC
PCRoute.route('/add-PC').post((req, res, next) => {
  PC.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all PC
PCRoute.route('/').get((req, res) => {
  PC.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single PC
PCRoute.route('/read-PC/:id').get((req, res) => {
  PC.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update PC
PCRoute.route('/update-PC/:id').put((req, res, next) => {
  PC.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('PC successfully updated!')
    }
  })
})

// Delete PC
PCRoute.route('/delete-PC/:id').delete((req, res, next) => {
  PC.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = PCRoute;