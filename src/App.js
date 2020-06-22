import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as EventActions from './EventActions';


function mapStateToProps(state) {
  return {
    userList: state.userList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => dispatch(EventActions.createEvent())    
  };
}

class App extends Component {
  

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
     this.props.click();
  }
  

  render() {
    return (
      <div className="container text-center mt-4">
        <h1>{this.props.userList.length}</h1>
        <button onClick={this.clickHandler} className="btn btn-primary rounded-pill px-4">Load Services</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);