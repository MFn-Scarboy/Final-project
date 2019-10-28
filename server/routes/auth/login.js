const express    = require("express")
const router     = express.Router()
const bcrypt     = require("bcrypt")
const session    = require("express-session")
const bcryptSalt = 10
const User       = require("../../models/user")


router.post("/login", (req, res, next) => {
    debugger
    const email    = req.body.email
    const password = req.body.password

    if(email === "" || password === "") {
        res.send("login", {
            errorMessage: "Please enter your login information"
        })
        return
    }

    User.findOne({ email: email })
    .then(user => {
        if(!user) {
            res.send("login", {
                errorMessage: "Please enter valid login"
            })
            return
        }
        else {
            bcrypt.compare(password, user.password, function(error, equal) {
                if(error) {
                    res.send("login", {
                        errorMessage: "Please enter valid login"
                    })
                }
                else if(equal) {
                    req.session.user = user
                    //res.redirect("/auth/profile")
                    res.send(user)
                }
                else {
                    next({ message: "Invalid login"})
                }
            })
        }
    })
    .catch(error => {
        next(error)
    })
})

module.exports = router