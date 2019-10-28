import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Rides extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rides: []
        }

    }

    componentDidMount() {

        axios({
            method: "GET",
            url: `${process.env.REACT_APP_SERVER}/auth/rides`,
            withCredentials: true
        })
        .then((response) => {
            this.setState(response.data)
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <button><Link to="/login">login</Link></button> {/*set departure/destination */}
                    <button><Link to="/signup">Sign up</Link></button> {/* rides signed up for */}
                    <button><Link to="/create">Create a Ride</Link></button>
                    <button><Link to="/profile">Profile</Link></button>
                </div>
            {this.state.rides.map((currentValue) => {
                return <div className="ride-div">
                    <h2>{currentValue.location}</h2>
                    <h2>{currentValue.destination}</h2>
                    <h2>{currentValue.estArrivalTime}</h2>
                    <h2>{currentValue.departureTime}</h2>
                    <h2>{currentValue.availableSpots}</h2>
                </div>
            })}
            </div>
        )
    }
}