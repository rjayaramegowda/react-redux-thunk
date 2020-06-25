import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'



function mapStateToProps(state) {
  return {
    userList: state.userList
  };
}

function mapDispatchToProps(dispatch) {
  return {    
    deleteUser: (vo) => dispatch({type:"REMOVE_USERS", data:vo})    
  };
}

class UserPage extends Component {  
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(vo) {
  //  console.log(vo.id)
   this.props.deleteUser(vo)
  }
  

  render() {

    var itemList = this.props.userList.map((vo, index) => 
    <tr key={index}>
            <th scope="row">{vo.id}</th>
            <td>{vo.name}</td>
            <td>{vo.email}</td>
            <td>{vo.website}</td>
            <td><Link to={'./user/' + vo.id} className="btn btn-primary btn-sm">Edit</Link>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemList}
        </tbody></table>        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);