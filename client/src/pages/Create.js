import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'

export default class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location       : "",
            destination    : "",
            despartureTime : "",
            estArrivalTime : "",
            availableSpots : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        axios({
            method: "POST",
            data: qs.stringify(this.state),
            url: `${process.env.REACT_APP_SERVER}/auth/rides`,
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        })
        .then((response) => {
            debugger
            this.props.history.push("/ridedetail")
        })
        .catch((error) => {
            debugger
        })
    }

    render() {
        return (
            <div className="create-div">
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} className="create-input" placeholder="Location" type="text" name="location"></input>
                    <input onChange={this.handleChange} className="create-input" placeholder="Destination" type="text" name="destination"></input>
                    <input onChange={this.handleChange} className="create-input" placeholder="Departure Time" type="text" name="departureTime"></input>
                    <input onChange={this.handleChange} className="create-input" placeholder="Estimated Arrival Time" type="text" name="estArrivalTime"></input>
                    <input onChange={this.handleChange} className="create-input" placeholder="Available Spots" type="text" name="availableSpots"></input>
                    <div>
                        <button className="create-ride-btn" type="submit">Create Ride</button>
                    </div>
                </form>
            </div>
        )
    }
}