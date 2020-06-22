const userReducer = (state = userList, action) => {
  console.log("[userReducer] action.type = " + action.type);
  switch (action.type) {
    case "GET_USERS":      
      return Object.assign([...state], action.data);

    default:
      console.log('default')
      return state;
  }
};

export default userReducer;

// userList
const userList = [];

