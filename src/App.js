import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as UserAction from './UserActions'

import UserPage from "./UserPage";
import EditUser from "./EditUser";


function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(UserAction.getUsers())
  };
}

class App extends Component {

  componentDidMount() {
    console.log("init")
    this.props.getUser();
  }
  
  render() {
    return (
      <Router>
        <Route exact path={["/"]} component={UserPage} />        
        <Route exact path="/user/:userId" component={EditUser} /> 
      </Router>      
    );
  }
}

export default connect(null, mapDispatchToProps)(App);