const express = require('express');
const skateboardRoute = express.Router();

// Student model
let skateboardModel = require('../models/skateboard');

// Get all data
skateboardRoute.route('/').get((req, res, next) => {
    skateboardModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create student data
skateboardRoute.route('/create-skateboard').post((req, res, next) => {
    skateboardModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit student data
skateboardRoute.route('/edit-skateboard/:id').get((req, res, next) => {
    skateboardModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update student data
skateboardRoute.route('/update-skateboard/:id').put((req, res, next) => {
    skateboardModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('skateboard successfully updated');
        }
    })
})

// Delete student data
skateboardRoute.route('/delete-skateboard/:id').delete((req, res, next) => {
    skateboardModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = skateboardRoute;