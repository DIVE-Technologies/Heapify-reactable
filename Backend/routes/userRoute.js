const express = require('express');
const User = require('./../Model/userModel');

const router = express.Router();

router.post("/signin", async (req, res) => {

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
        });


    } else {
        res.status(401).send({ msg: 'Invalid Email or Password.' });
    }
})

router.post("/register", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await user.save();
    if (newUser) {
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        });
    } else {
        res.status(401).send({ msg: 'Invalid User Data.' });
    }
})


module.exports = router;