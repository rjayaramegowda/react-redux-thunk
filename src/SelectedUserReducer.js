function selectedUser(state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      console.log("[SelectedUserReducer] user  = " + action.data);      
      return action.data;

    default:
      return state;
  }
}

export default selectedUser;