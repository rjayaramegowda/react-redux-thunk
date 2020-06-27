import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import selectedUser from './SelectedUserReducer'
export default combineReducers({
  userList: userReducer,
  user:selectedUser,
})

