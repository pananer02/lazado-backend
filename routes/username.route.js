const express = require('express');
const usernameRoute = express.Router();

// Student model
let UsernameModel = require('../models/username');

// Get all data
usernameRoute.route('/').get((req, res, next) => {
    UsernameModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create student data
usernameRoute.route('/create-username').post((req, res, next) => {
    UsernameModel.create(req.body, (error, data) => {
        if (error) {
            console.log('username unsuccessfully');
            return next(error);
        } else {
            res.json(data);
            console.log('username successfully');
        }
    })
})

// Edit student data
usernameRoute.route('/edit-username/:id').get((req, res, next) => {
    UsernameModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update student data
usernameRoute.route('/update-username/:id').put((req, res, next) => {
    UsernameModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('username successfully updated');
        }
    })
})

// Delete student data
usernameRoute.route('/delete-username/:id').delete((req, res, next) => {
    UsernameModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = usernameRoute;