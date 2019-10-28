const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RideSchema = new Schema({
    driver: { type: Schema.Types.ObjectId, ref: 'User' },
    location: String,
    destination: String,
    departureTime: String,
    estArrivalTime: String,
    availableSpots: Number,
    passengers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const Ride = mongoose.model('Ride', RideSchema)

module.exports = Ride;