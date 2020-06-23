import React, { Component } from "react";
import UserPage from "./UserPage";
import EditUser from "./EditUser";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={["/"]} component={UserPage} />        
        <Route exact path="/user/:userId" component={EditUser} /> 
      </Router>      
    );
  }
}

export default App;