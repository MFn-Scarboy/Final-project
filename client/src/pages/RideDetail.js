import React, { Component } from 'react'
import axios from 'axios'

export default class RideDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ride: {},
            successMsg: ""
        }

        this.joinRide   = this.joinRide.bind(this)
        this.validation = this.validation.bind(this)
        this.leaveRide  = this.leaveRide.bind(this)
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_SERVER}/auth/ridedetail/${this.props.match.params.rideId}`,
            withCredentials: true
        })
        .then((response) => {
            this.setState({ ride: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    joinRide() {
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_SERVER}/auth/rideId/${this.state.ride._id}`,
            withCredentials: true
        })
        .then((response) => {
            this.setState({ successMsg: response.data.successMsg, ride: response.data.updatedRide})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    leaveRide() {
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_SERVER}/auth/leave`,
            data: {ride: this.state.ride},
            withCredentials: true
        })
        .then((response) => {
            this.setState({ successMsg: response.data.successMsg, ride: response.data.updatedRide })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    validation() {
        var currentUser = JSON.parse(localStorage.getItem("user"))
        return this.state.ride.passengers.every((currentvalue) => {
            return currentvalue._id !== currentUser._id
        })
    }

    render() {
        return (
            <div className="ridedetail-div">
                <div className="ridedetail-information-div">
                    <p className="ridedetail-information">{this.state.ride.location}</p>
                    <p className="ridedetail-information">{this.state.ride.destination}</p>
                    <p className="ridedetail-information">{this.state.ride.departureTime}</p>
                    <p className="ridedetail-information">{this.state.ride.estArrivalTime}</p>
                    <p className="ridedetail-information">{this.state.ride.availableSpots}</p>
                    {/* all other information tba */}
                </div>
                {this.state.successMsg
                    ? <p className="ridedetail-succes-msg">{this.state.successMsg}</p>
                    : null
                }
                {this.state.ride.passengers ?
                (this.validation()
                    ? <div className="join-btn-div"><button className="ride-join-btn" onClick={this.joinRide}>Join Ride</button></div>
                    : <div className="join-btn-div"><button className="ride-leave-btn" onClick={this.leaveRide}>Leave Ride</button></div> )
                    : null
                }
            </div>
        )
    }
}