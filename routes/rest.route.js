const express = require('express')
const Restaurant = require('../models/rest.model')
const Food = require('../models/food.model')
const RestRoute = express.Router()

RestRoute.get('/', async (req, res) => {
    try {
        const result = await Restaurant.find()
        res.send({ good: true, reslut: result, length: result.length })
    } catch (error) {
        res.send({ good: false })
    }
})

RestRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await Restaurant.findById(id)
        res.send({ good: true, reslut: result })
    } catch (error) {
        res.send({ good: false })
    }
})


RestRoute.get('/food/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await Food.find({ by: id })
        res.send({ good: true, reslut: result, length: result.length })
    } catch (error) {
        res.send({ good: false })
    }
})



module.exports = RestRoute