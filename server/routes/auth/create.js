const express    = require("express")
const router     = express.Router()
const session    = require("express-session")
const Ride       = require("../../models/ride")


router.post("/rides", (req, res, next) => {
console.log(req.session)
    const location       = req.body.location
    const destination    = req.body.destination
    const estArrivalTime = req.body.estArrivalTime
    const departureTime  = req.body.departureTime
    const availableSpots = req.body.availableSpots
    
    if(location === "" || destination === "" || estArrivalTime === "" || departureTime === "" || availableSpots === "") {
        res.send("create", {
            errorMessage: "Please fill in all the forms."
        })
        return
    } else {
        Ride.create({
            driver          : req.session.user._id,
            location        : req.body.location,
            destination     : req.body.destination,
            estArrivalTime  : req.body.estArrivalTime,
            departureTime   : req.body.departureTime,
            availableSpots  : req.body.availableSpots
        })
        .then((ride) => {
            console.log(ride)
            res.send({ ride })
        })
        .catch((error) => {
            console.log(error)
        })
    }
})

module.exports = router