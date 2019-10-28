const express = require("express")
const router  = express.Router()
const User    = require("../../models/user")

router.get("/delete", (req, res) => {
    User.findByIdAndDelete(re.query.id)
    .then((user) => {
        req.session.destroy()
        res.redirect("/")
    })
    .catch((error) => {
        res.send(error);
    })
})

module.exports = router