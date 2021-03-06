export const userReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      console.log("[UserReducer] action.type = " + action.type);
      return action.data;

    case "UPDATE_USER":
      console.log("[UserReducer] action.type = " + action.type);
      return [
        ...state.slice(0, action.index),
        action.data,
        ...state.slice(action.index + 1),
      ];

    case "ADD_USERS":
      return state;

    case "REMOVE_USERS":
      return state.filter((item) => item.id !== action.data.id);

    default:
      return state;
  }
};

export const selectedUser = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("[SelectedUserReducer] user  = " + action.data);      
      return action.data;

    default:
      return state;
  }
}

