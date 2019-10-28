const express    = require("express")
const router     = express.Router()
const bcrypt     = require("bcrypt")
const bcryptSalt = 10
const User       = require("../../models/user")
const mongoose   = require("mongoose")
const multer     = require("multer")

router.post("/signup", (req, res, next) => {
    const email    = req.body.email
    const password = req.body.password
    const salt     = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    if(email === "" || password === "") {
        res.send("signup", {
            errorMessage: "Indicate a valid email and a password to sign up"
        })
        return
    }

    User.findOne({ email })
    .then(user => {
        if(user !== null) {
            res.send({
                errorMessage: "This email adress already exists"
            })
            return
        }
        User.create({
            firstname: req.body.firstname,
            lastname:  req.body.lastname,
            email:     email,
            password:  hashPass,
            driver:    req.body.driver,
        })
        .then((user) => {
            req.session.user = user
            res.send({ user })
        })
        .catch(error => {
            console.log(error)
        })
    })
})

module.exports = router