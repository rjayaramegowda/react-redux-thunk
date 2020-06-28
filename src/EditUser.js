import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {
    userList: state.userList,
    vo: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveUser: (v1, userIndex) =>
      dispatch({ type: "UPDATE_USER", data: v1, index: userIndex }),
  };
}

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.vo };
    this.saveHandler = this.saveHandler.bind(this);
  }

  saveHandler() {
    console.log("[EditUser] saveHandler()");
    var itemIndex = this.props.userList.indexOf(this.props.vo);
    this.props.saveUser({ ...this.props.vo, ...this.state }, itemIndex);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container w-sm-50 mt-sm-5 border p-3 p-sm-5">
        <h1 className="text-center">Edit User</h1>

        <div className="form-group row mt-3">
          <label
            htmlFor="colFormLabel"
            className="col-sm-4 col-form-label text-sm-right"
          >
            Name :
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              defaultValue={this.props.vo.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="form-control rounded-0"
              id="colFormLabel"
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <label
            htmlFor="colFormLabel2"
            className="col-sm-4 col-form-label text-sm-right"
          >
            Email:
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              defaultValue={this.props.vo.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="form-control rounded-0"
              id="colFormLabel2"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group row mt-3">
          <label
            htmlFor="colFormLabel3"
            className="col-sm-4 col-form-label text-sm-right"
          >
            Website:
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              defaultValue={this.props.vo.website}
              onChange={(e) => this.setState({website: e.target.value})}
              className="form-control rounded-0"
              id="colFormLabel3"
              placeholder="Website"
            />
          </div>
        </div>

        <div className="col-sm-8 offset-sm-4  ">
          <button
            onClick={this.saveHandler}
            className="btn btn-primary rounded-pill px-5"
          >
            Save
          </button>
          <Link
            to="/"
            className="btn btn-outline-primary rounded-pill px-5 ml-2"
          >
            Cancel
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
