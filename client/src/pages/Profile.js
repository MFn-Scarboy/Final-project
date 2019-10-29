import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }

        this.logout = this.logout.bind(this)
    }

    logout() {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_SERVER}/auth/logout`,
            withCredentials: true
        })
        .then(() => {
            localStorage.removeItem("user")
            this.props.history.push("/login")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.logout}>Log out</button>
            </div>
        )
    }
}