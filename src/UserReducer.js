const userReducer = (state = userList, action) => {
  switch (action.type) {
    case "GET_USERS":
      console.log("[UserReducer] action.type = " + action.type);
      return Object.assign([...state], action.data);

    case "UPDATE_USER":
      console.log("[UserReducer] action.type = " + action.type);
      state.splice(action.index, 1, action.data);
      return state;

    case "ADD_USERS":
      return state;

    case "REMOVE_USERS":
      return state.filter((item) => item.id !== action.data.id);

    default:
      return state;
  }
};

export default userReducer;

// userList
const userList = [];
