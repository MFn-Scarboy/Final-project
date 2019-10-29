import React, { Component } from 'react'
import axios from 'axios'

export default class RideDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ride: {}
        }
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

    render() {
        return (
            <div>
                
            </div>
        )
    }
}