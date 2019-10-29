import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import { signup } from "../utils/auth";

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname : "",
            lastname  : "",
            email     : "",
            password  : "",
            driver    : false
        }

        this.handleChange       = this.handleChange.bind(this)
        this.handleSubmit       = this.handleSubmit.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        signup(this.state)
        .then((response) => {
            this.props.history.push("/")
        })
        .catch((error) => {
            debugger
        })
    }

    handleOptionChange(e) {
        if (e.target.value === "driver") {
            this.setState({
                driver: true
            })
        } else {
            this.setState({
                driver: false
            })
        }
    }

    render(){
        return(
                <div className="signup-div">
                    <h1 className="signup-h1">[App name]</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-input-div">
                            <input className="signup-input" onChange={this.handleChange} value={this.state.firstname} placeholder="firstname" type="text" name="firstname"/>
                            <input className="signup-input" onChange={this.handleChange} value={this.state.lastname} placeholder="lastname" type="text" name="lastname"/>
                            <input className="signup-input" onChange={this.handleChange} value={this.state.email} placeholder="email" type="text" name="email"/>
                            <input className="signup-input" onChange={this.handleChange} value={this.state.password} placeholder="password" type="password" name="password"/>
                        </div>
                        <div className="radio-div">
                            <input className="radio-input" onChange={this.handleOptionChange} type="radio" name="driver" value="not-driver" />
                            <label className="signup-label">I would <strong>not</strong> like to sign up as a driver</label>
                        </div>
                        <div className="radio-div">
                            <input className="radio-input" onChange={this.handleOptionChange} type="radio" name="driver" value="driver" />
                            <label className="signup-label">I <strong>would</strong> like to sign up as a driver</label>
                        </div>
                        <div className="create-btn-div">
                            <button className="create-btn" type="submit">Create account</button>
                        </div>
                    </form>
                </div>
        )
    }
}