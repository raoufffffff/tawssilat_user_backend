const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const FeedBackRoute = require('./routes/feed.route');
const UserRoute = require('./routes/user.route');
const AuthRoute = require('./auth/Auth');
const foodRoute = require('./routes/food.route');
const RestRoute = require('./routes/rest.route');
const OrderRoute = require('./routes/order.route');
require('dotenv').config()
const app = express()


app.use(cors());
app.use(express.json())
app.use('/feedback', FeedBackRoute)
app.use('/user', UserRoute)
app.use('/auth', AuthRoute)
app.use('/food', foodRoute)
app.use('/rest', RestRoute)
app.use('/order', OrderRoute)


app.get('/', (req, res) => {

    res.send('hello world')
});





app.listen(3000, () => console.log('good to go!'));

mongoose
    .connect(process.env.MONGODB_APP_PASSWORD)
    .then(() => {
        console.log("connceted")

    })
    .catch(err => console.log(err))
module.exports = app;