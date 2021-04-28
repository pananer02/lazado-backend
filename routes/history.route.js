const express = require('express');
const historyRoute = express.Router();

// Student model
let historyModel = require('../models/history');

// Get all data
historyRoute.route('/').get((req, res, next) => {
    historyModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create student data
historyRoute.route('/create-history').post((req, res, next) => {
    historyModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit student data
historyRoute.route('/edit-history/:id').get((req, res, next) => {
    historyModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update student data
historyRoute.route('/update-history/:id').put((req, res, next) => {
    historyModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('history successfully updated');
        }
    })
})

// Delete student data
historyRoute.route('/delete-history/:id').delete((req, res, next) => {
    historyModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = historyRoute;