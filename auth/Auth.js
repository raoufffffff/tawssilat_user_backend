const express = require('express');
const User = require('../models/user.model')
const AuthRoute = express.Router()

AuthRoute.post('/', async (req, res) => {
    const { email, password } = req.body
    try {
        const myuser = await User.findOne({ email: email })
        if (!myuser) {
            res.send({ good: false, message: "email anvalid" })
            return
        }
        if (myuser.password === password) {
            res.send({ good: true, result: myuser, message: "success" })
            return
        }
        res.send({ good: false, message: "password wrong" })
    } catch (error) {
        res.send({ good: false, message: error })
    }
})


module.exports = AuthRoute