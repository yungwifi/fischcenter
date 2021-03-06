import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from './components/HomePage'
import FishPage from './components/FishPage'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import FishProfile from './components/FishProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:user_id" component={UserProfile} />
          <Route exact path="/fish" component={FishPage} />
          <Route exact path="/users/:user_id/fish/:fish_id" component={FishProfile} />
        </div >
      </Router>
    );
  }
}

export default App;
