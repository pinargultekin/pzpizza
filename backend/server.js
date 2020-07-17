var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')

require('dotenv').config();


var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const uri = process.env.ATLAS_URI;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }

)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(5000, function () {
    console.log('Server is running on port: ' + 5000)
})






