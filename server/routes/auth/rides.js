const express    = require("express")
const router     = express.Router()

const Ride = require('../../models/ride')
router.get("/rides", (req, res, next) => {
    console.log(req.session)

    Ride.find({})
    .then( rides => {
        console.log(rides)
        res.send({rides})
    })
    .catch(err=> console.log(err))
})

module.exports = router