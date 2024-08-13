const express = require('express')
const User = require('../models/user.model')
const UserRoute = express.Router()

UserRoute.get('/', async (req, res) => {
    try {
        const myuser = await User.find()
        res.send({ good: true, result: myuser, length: myuser.length })
    } catch (error) {
        res.send({ good: false, message: error })
    }
})

UserRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const myuser = await User.findById(id)
        res.send({ good: true, result: myuser })
    } catch (error) {
        res.send({ good: false, message: error })
    }
})

UserRoute.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const myuser = await User.findByIdAndUpdate(id, body)
        res.send({ good: true, result: myuser })
    } catch (error) {
        res.send({ good: false, message: error })
    }
})

UserRoute.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const myuser = await User.findByIdAndDelete(id)
        res.send({ good: true, result: myuser })
    } catch (error) {
        res.send({ good: false, message: error })
    }
})

UserRoute.post('/', async (req, res) => {
    let { body } = req
    body.cancelOrders = 0
    body.orders = 0
    try {
        const myuser = await User.create(body)
        res.send({ good: true, result: myuser })
    } catch (error) {
        res.send({ good: false, message: error })
    }
})



module.exports = UserRoute