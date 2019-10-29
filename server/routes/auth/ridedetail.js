const express    = require("express")
const router     = express.Router()
const Ride       = require('../../models/ride')


router.get("/ridedetail/:ride", (req, res, next) => {

    Ride.findById(req.params.ride)
    .then(() => {
        res.send({ Ride })
    })
    .catch((error) => {
        console.log(error)
    })
})

module.exports = router