const userReducer = (state = userList, action) => {
  console.log("[userReducer] action.type = " + action.type);
  switch (action.type) {
    case "GET_USERS":      
      return Object.assign([...state], action.data);
    
    case "ADD_USERS":
      return state;
      
    case "REMOVE_USERS":
     return state.filter(item => item.id !== action.data.id);  

    default:
      console.log('default')
      return state;
  }
};

export default userReducer;

// userList
const userList = [];

