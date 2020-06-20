const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find().then(users => res.json(users)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log("Route is listening:", req);

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

    newUser.save().then(() => res.json('User added!')).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
