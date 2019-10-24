import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'

export default class Login extends Component {
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <div className="">
                <form>
                    <input></input>
                    <input></input>
                    <button type="submit">Login</button>
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}