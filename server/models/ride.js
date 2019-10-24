const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RideSchema = new Schema({
    location: String,
    destination: String,
    departureTime: String,
    estArrivalTime: String,
    availableSpots: Number,
    passengers: []
})

const Ride = mongoose.model('Ride', RideSchema)

module.exports = Ride;