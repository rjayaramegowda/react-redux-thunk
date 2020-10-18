import React, { Component } from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    userList: state.userList
  };
}

function mapDispatchToProps(dispatch) {
  return {    
    deleteUser: (vo) => dispatch({type:"REMOVE_USERS", data:vo}),
    setUser: (vo) => dispatch({ type: "SET_USER", data: vo})    
  };
}

class User extends Component {  
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  deleteItem(vo) {
    console.log("UserPage deleteItem()");    
    this.props.deleteUser(vo)
  }

  editUser(e) {
    console.log("[UserPage] editUser, e.currentTarget.id = e.currentTarget.id")    
    var user = this.props.userList.filter(v => v.id ===  parseInt(e.currentTarget.id));
    this.props.setUser(user[0]);  
    this.props.history.push('./user/' + e.currentTarget.id);
  }
  

  render() {

    var itemList = this.props.userList.map((vo, index) => 
    <tr key={index}>
            <th scope="row">{vo.id}</th>
            <td>{vo.name}</td>
            <td>{vo.email}</td>
            <td>{vo.website}</td>
            <td><button id={vo.id} onClick={(e) => this.editUser(e)} className="btn btn-primary btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm ml-2" onClick={(e) => this.deleteItem(vo)}>Delete</button> </td>
          </tr>
          )


    return (
      <div className="container text-center mt-4">
       <table className="table text-left">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemList}
        </tbody></table>        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);