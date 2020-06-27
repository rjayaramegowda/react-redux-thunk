import axios from "axios";

export function getUsers() {
  // Redux Thunk middleware allows you to write action creators that return a function instead of an action.
  // The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
  // The inner function receives the store methods dispatch and getState as parameters.
  return (dispatch) => {

    var userId = window.location.pathname.length > 6 ? parseInt(window.location.pathname.substring(6)) : 0;

    // show loading
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("[UserActions] getUsers() res.data = " + res.data);
        if(userId > 0) {
           var user = res.data.filter(v => v.id === userId)
           dispatch({ type: "SET_USER", data: user[0] });          
        }

        dispatch({ type: "GET_USERS", data: res.data });
      })
      
  };
}

export function setUser() {
  return (dispatch, getState) => {
    let state = getState();
    let filteredUser = state.userList.filter(
      (vo) => vo.id === parseInt(state.userId)
    );
    dispatch({ type: "SET_USER", data: filteredUser });
  };
}
