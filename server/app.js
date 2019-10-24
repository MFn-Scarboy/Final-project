require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')

mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
    })
    .catch(error => {
        console.error('Error connecting to Mongo', error)
    })

const app = express()





app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`));