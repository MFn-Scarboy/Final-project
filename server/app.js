require('dotenv').config()

const express    = require('express')
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const session    = require('express-session')
const cors       = require('cors')
const app        = express()

mongoose
    .connect(process.env.DB, { useFindAndModify: false, useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
    })
    .catch(error => {
        console.error('Error connecting to Mongo', error)
    })

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 } // 1 week
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

const loginRoute = require("./routes/auth/login")
app.use("/auth", loginRoute)

const signupRoute = require("./routes/auth/signup")
app.use("/auth", signupRoute)

const createRoute = require("./routes/auth/create")
app.use("/auth", createRoute)

const deleteRoute = require("./routes/auth/delete")
app.use("/auth", deleteRoute)

const logoutRoute = require("./routes/auth/logout")
app.use("/auth", logoutRoute)

const profileRoute = require("./routes/auth/profile")
app.use("/auth", profileRoute)

const ridedetailRoute = require("./routes/auth/ridedetail")
app.use("/auth", ridedetailRoute)

const ridesRoute = require("./routes/auth/rides")
app.use("/auth", ridesRoute)

const myridesRoute = require("./routes/auth/myrides")
app.use("/auth", myridesRoute)

app.use(function (error, req, res, next) {
    console.error(error.stack)
    res.status(500).send("Something broke!")
})

app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`));