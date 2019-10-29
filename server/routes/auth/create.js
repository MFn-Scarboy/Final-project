const express    = require("express")
const mongoose   = require('mongoose')
const router     = express.Router()
const session    = require("express-session")
const Ride       = require("../../models/ride")
const User       = require("../../models/user")

router.post("/rides", (req, res, next) => {
    const userId         = req.session.user._id
    const driverRides    = req.session.user.driverRides.map(rideId =>{
        return mongoose.Types.ObjectId(rideId)
    })
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
            driver          : userId,
            location        : req.body.location,
            destination     : req.body.destination,
            estArrivalTime  : req.body.estArrivalTime,
            departureTime   : req.body.departureTime,
            availableSpots  : req.body.availableSpots
        })
        .then((ride) => {
            driverRides.push(ride._id);
            return User.findByIdAndUpdate(userId, {driverRides})
            .then(()=> res.send({ ride }) )
            .catch(err => console.log(err))
        })
        .catch((error) => {
            console.log(error)
        })
    }
})

module.exports = router