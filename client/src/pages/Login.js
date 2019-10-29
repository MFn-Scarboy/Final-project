import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import { Link } from 'react-router-dom'
import { signup } from "../utils/auth";

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            url: `${process.env.REACT_APP_SERVER}/auth/login`,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        })
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data))
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="login-div">
                <h1 className="login-h1">[App name]</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="login-form" onChange={this.handleChange} value={this.state.email} placeholder="email" type="text" name="email"/>
                    <input className="login-form" onChange={this.handleChange} value={this.state.password} placeholder="password" type="password" name="password"/>
                    <div>
                        <button className="login-btn" type="submit">Login</button>
                    </div>
                    <div>
                        <button className="signup-btn"><Link to="/signup">Sign up</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}