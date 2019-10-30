const express    = require("express")
const router     = express.Router()
const Ride       = require('../../models/ride')

router.get("/rides", (req, res, next) => {

    Ride.find({
        driver: { $ne: req.session.user._id}
    })
    .then(rides => {
        res.send({ rides })
    })
    .catch(error => console.log(error))
})

module.exports = router