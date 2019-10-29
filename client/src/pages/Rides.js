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
                <div className="rides-btn-div">
                    <button className="rides-btn"><Link to="/login">Login</Link></button> {/*set departure/destination */}
                    <button className="rides-btn"><Link to="/myrides">My rides</Link></button> {/* rides signed up for */}
                    <button className="rides-btn"><Link to="/create">Create</Link></button>
                    <button className="rides-btn"><Link to="/profile">Profile</Link></button>
                </div>
            {this.state.rides.map((currentValue, index) => {
                return (
                <Link to={`/ridedetail/${currentValue._id}`}><div className="rides-div" key={index.toString()}>
                    <div className="rides-div1">
                        <p>{currentValue.location}</p>
                        <p>to</p>
                        <p>{currentValue.destination}</p>
                    </div>
                    <div className="rides-div2">
                        <p>{currentValue.departureTime} departure</p>
                        <p>{currentValue.estArrivalTime} arrival</p>
                        <p>{currentValue.availableSpots} spots available</p>
                    </div>
                </div></Link>
                )
            })}
            </div>
        )
    }
}