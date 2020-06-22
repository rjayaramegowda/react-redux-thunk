import React, { Component } from 'react';

class FormPage extends Component {

    state = {vo:this.props.vo}
    
    render() {
        return (
          <div className="container mt-5 w-25 border py-5 px-3" >
          <h1 className="text-center">Login</h1>    
        <form>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address:</label>
          <input type="email" value={this.state.vo.email} onChange={e => this.setState({vo: {email: e.target.value}})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block rounded-0 mt-4">Login</button>
        <button type="submit" className="btn btn-outline-secondary btn-block rounded-0 mt-2">Forgot Password</button>
      </form>
      </div>
            
        );
    }
}

export default FormPage;