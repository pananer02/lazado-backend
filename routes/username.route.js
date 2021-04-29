
const express = require('express');
const usernameRoute = express.Router();

// Student model
let UsernameModel = require('../models/username');
let skateboardModel = require('../models/skateboard');
let historyModel = require('../models/history');

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
usernameRoute.route('/create-user').post((req,res,next)=>{
    UsernameModel.create(req.body,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
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

// Get all data
usernameRoute.route('/').get((req, res, next) => {
    skateboardModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create student data
usernameRoute.route('/create-skateboard').post((req, res, next) => {
    skateboardModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit student data
usernameRoute.route('/edit-skateboard/:id').get((req, res, next) => {
    skateboardModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update student data
usernameRoute.route('/update-skateboard/:id').put((req, res, next) => {
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
usernameRoute.route('/delete-skateboard/:id').delete((req, res, next) => {
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


// Get all data
usernameRoute.route('/').get((req, res, next) => {
    historyModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create student data
usernameRoute.route('/create-history').post((req, res, next) => {
    historyModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit student data
usernameRoute.route('/edit-history/:id').get((req, res, next) => {
    historyModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update student data
usernameRoute.route('/update-history/:id').put((req, res, next) => {
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
usernameRoute.route('/delete-history/:id').delete((req, res, next) => {
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

module.exports = usernameRoute;