import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as UserAction from './components/User/UserActions'

import EditUser from "./components/User/EditUser";
import User from "./components/User";


function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(UserAction.getUsers())
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] constructor()");    
    this.props.getUser();
  }
  
  render() {
    return (
      <Router>
        <Route exact path={["/"]} component={User} />        
        <Route exact path="/user/:userId" component={EditUser} /> 
      </Router>      
    );
  }
}

export default connect(null, mapDispatchToProps)(App);