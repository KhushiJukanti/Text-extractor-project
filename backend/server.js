const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const orderRoutes = require('./routes/orderRoutes');


const app = express()
app.use(cors())


app.get('/', function (req, res) {
    res.send("Hello Bot")
})

mongoose.connect('mongodb://localhost:27017/sampleDB')


app.use('/api/order', orderRoutes);

app.listen(7000, () => {
    console.log("server is running at 7000")
})