require('dotenv').config();
const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



const User = require('../models/user.model')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/add', (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    const newUser = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        address,
        city,
        state,
        zip
    });

    User.findOne({
        email: req.body.email

    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    newUser.password = hash
                    User.create(newUser)
                        .then(user => {
                            res.json({ status: user.email + 'Registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
console.log(".");
console.log(".");
users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email

    })
        .then(user => {
            if (user) {
                if (bcrypt.compare(req.body.password, user.password)) {
                    // Passwords match
                    const payload = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    console.log(token);
                    res.send(token)
                } else {
                    // Passwords don't match
                    res.json({ error: 'Password did not match' })
                }
            } else {
                res.json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.get('/account', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id

    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('User does not exist')
            }
            console.log(user)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = users






