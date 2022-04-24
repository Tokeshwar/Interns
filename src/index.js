const express = require('express')
const bodyParser = require('body-parser')

const route = require('../src/routes/route')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect("mongodb+srv://Satyaveer1994:Satyaveer123@cluster0.pn1nk.mongodb.net/group26Databse", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)

app.listen(process.env.PORT || 3000, function() {
    console.log("Express app is running on port " + (process.env.PORT || 3000))
})