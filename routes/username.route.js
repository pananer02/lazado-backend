const express = require('express');
const router = express.Router()
const usernameRoute = express.Router();
const md5 = require('md5');
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
/*usernameRoute.route('/create-username').post((req, res, next) => {
    UsernameModel.create(req.body, (error, data) => {
        if (error) {
            console.log('username unsuccessfully');
            return next(error);
        } else {
            res.json(data);
            console.log('username successfully');
        }
    })
})*/
router.post('/create-username', async (req, res) => {
    //console.log(req.body)
    /*if(req.body.password.length < 8){
        return res.json({ msg: '' })
    }*/
    req.body.password = md5(req.body.password)
    //console.log(req.body.password)

    try {
        await UserModel.create(req.body)
        //console.log('user created successfully' + response)
        return res.json({ status: 'success' })
    } catch (error) {
        return res.json({ status: 'error' })
    }
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

module.exports = usernameRoute