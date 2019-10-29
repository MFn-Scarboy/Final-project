import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Create from "./pages/Create"
import Rides from "./pages/Rides"
import RideDetail from "./pages/RideDetail"
import Profile from "./pages/Profile"

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
        <Route exact path="/create" component={ Create }/>
        <Route exact path="/profile" component={ Profile }/>
        <Route exact path="/ridedetail/:rideId" component={ RideDetail }/>
        <Route exact path="/" component={ Rides }/>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/signup" component={ Signup }/>
      </div>
    )
  }
}