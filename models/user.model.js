const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    img: String,
    phone: String,
    cancelOrders: Number,
    orders: Number,
    city: String,
    resFiv: {
        type: [String], // Specify that menu is an array of strings
        default: [] // Initialize with an empty array
    },
    foodFiv: {
        type: [String], // Specify that menu is an array of strings
        default: [] // Initialize with an empty array
    }
})


const User = mongoose.model('user', user)

module.exports = User 