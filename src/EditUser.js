import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        userList: state.userList
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}



class EditUser extends Component {

    constructor(props) {
        super(props);
        console.log("[EditUser] cons")
    }

    componentDidMount() {
        console.log("[EditUser] componentDidMount()")
    }
    
    render() {

        // let userId = this.props.match.params.userId;
        let userVO = this.props.userList.filter(item =>  {
            console.log(item)
            return Number(item.id) === "1"; 
        });

        return (
            <div className="container w-sm-50 mt-sm-5 border p-3 p-sm-5">
        <h1 className="text-center">Edit User {userVO.name}</h1>
        
        <div className="form-group row mt-3">
        <label htmlFor="colFormLabel" className="col-sm-4 col-form-label text-sm-right">Name :</label>
        <div className="col-sm-6">
          <input type="text" className="form-control rounded-0" id="colFormLabel" placeholder="Name" />
        </div>
      </div>
      <div className="form-group row mt-3">
        <label htmlFor="colFormLabel2" className="col-sm-4 col-form-label text-sm-right">Email:</label>
        <div className="col-sm-6">
          <input type="email" className="form-control rounded-0" id="colFormLabel2" placeholder="Email" />
        </div>
      </div>

      <div className="form-group row mt-3">
        <label htmlFor="colFormLabel3" className="col-sm-4 col-form-label text-sm-right">Website:</label>
        <div className="col-sm-6">
          <input type="text" className="form-control rounded-0" id="colFormLabel3" placeholder="Website" />
        </div>
      </div>

      <div className="col-sm-8 offset-sm-4  ">
        <button className="btn btn-primary rounded-pill px-5">Save</button>
        <button className="btn btn-outline-primary rounded-pill px-5 ml-2">Cancel</button>
      </div>
     
        
      </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);