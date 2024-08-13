const express = require('express');
const food = require('../models/food.model');
const foodRoute = express.Router()

foodRoute.get('/', async (req, res) => {
    try {
        const myfood = await food.find()
        res.send({ good: true, length: myfood.length, result: myfood })
    } catch (error) {
        res.send({ good: false })
    }
})

foodRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const myfood = await food.findById(id)
        res.send({ good: true, result: myfood })
    } catch (error) {
        res.send({ good: false })
    }
})



module.exports = foodRoute