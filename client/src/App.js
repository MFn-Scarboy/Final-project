import React, { Component } from 'react';
import './App.scss';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Create from "./pages/Create"
import Rides from "./pages/Rides"
import RideDetail from "./pages/RideDetail"
import Profile from "./pages/Profile"
import Axios from 'axios';

require('dotenv').config()

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    // componentDidMount() {
    //   axios({

    //   })
    // }
  }

  render() {
    return(
      <div className="App">
        <h1>[App name]</h1>
        <Login />
      </div>
    )
  }


}