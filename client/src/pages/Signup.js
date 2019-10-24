import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        driver: Boolean,
        driverRides: [],
        passengerRides: []
    }

    render() {
        return (
            <div className="">
                <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}