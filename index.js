const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const FeedBackRoute = require('./routes/feed.route');
const UserRoute = require('./routes/user.route');
const AuthRoute = require('./auth/Auth');
const foodRoute = require('./routes/food.route');
const RestRoute = require('./routes/rest.route');


const app = express()
app.use(cors());
app.use(express.json())
app.use('/feedback', FeedBackRoute)
app.use('/user', UserRoute)
app.use('/auth', AuthRoute)
app.use('/food', foodRoute)
app.use('/rest', RestRoute)



app.get('/', (req, res) => {
    res.send("hello world")
})



app.listen(3000, () => console.log("Server ready on port 3000."));

mongoose
    .connect("mongodb+srv://raouf:rabah@cluster0.ayejlxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("mriglla")

    })
    .catch(err => console.log(err))
module.exports = app;