const express = require('express');
const Order = require('../models/order.route')
const OrderRoute = express.Router();

OrderRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const myOrder = await Order.findById(id)
        res.send({ good: true, result: myOrder })
    } catch (error) {
        res.send({ good: false })
    }
})


OrderRoute.get('/cancel/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const myOrder = await Order.findByIdAndUpdate(id, { cancel: true, whoCancel: "user", whyCancel: body.body })
        res.send({ good: true, result: myOrder })
    } catch (error) {
        res.send({ good: false })
    }
})


OrderRoute.get('/my/:id', async (req, res) => {
    const { id } = req.params
    try {
        const myOrder = await Order.find()
        let result = myOrder.filter(e => e.userid == id)
        res.send({ good: true, result: result, length: result.length })
    } catch (error) {
        res.send({ good: false })
    }
})


module.exports = OrderRoute