import { combineReducers } from 'redux';
import { userReducer, selectedUser } from './components/User/UserReducer';

export default combineReducers({
  userList: userReducer,
  user:selectedUser,
})

