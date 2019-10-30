const express    = require("express")
const router     = express.Router()
const Ride       = require("../../models/ride")
const User       = require("../../models/user")


router.get("/ridedetail/:ride", (req, res, next) => {

    Ride.findById(req.params.ride)
    .populate("driver")
    .populate("passengers")
    .then((response) => {
        res.json(response)
    })
    .catch((error) => {
        console.log(error)
    })
})

router.post("/rideId/:ride", (req, res, next) => {

    const userId   = req.session.user._id
    const rideId   = req.params.ride

    Ride.findByIdAndUpdate(rideId, { $push: { passengers: userId }, $inc: { availableSpots: -1 } }, { new: true })
    .populate("driver")
    .populate("passengers")
    .then((updatedRide) => {
        User.findByIdAndUpdate(userId, { $push: { passengerRides: rideId } }, {new: true})
        .then(() => {
            res.json({
                updatedRide: updatedRide,
                successMsg: "Added to your rides"
            })
        })
    })
    .catch((error) => {
        console.log(error)
    })
})

router.post("/leave", (req, res, next) => {
    const userId   = req.session.user._id
    const rideId   = req.body.ride._id
    const newArray = req.body.ride.passengers.filter((currentValue) => {
        return currentValue._id !== userId
    })
    const newArray2 = req.session.user.passengerRides.filter((currentValue) => {
        return currentValue._id !== rideId
    })
    Ride.findByIdAndUpdate(rideId, { passengers: newArray, $inc: { availableSpots: +1 } }, { new: true })
    .populate("driver")
    .populate("passengers")
    .then((response) => {
        User.findByIdAndUpdate(userId, { passengerRides: newArray2 }, { new: true })
        .then(() => {
            res.json({
                updatedRide: response,
                successMsg: "Removed from your rides"
            })
        })
        .catch((error) => {
            console.log(error)
        })
    })
    .catch((error) => {
        console.log(error)
    })
})

module.exports = router