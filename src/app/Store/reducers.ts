import { combineReducers } from "redux";
import { usersReducer, User } from "MainContainers/UsersContainer/reducer";

export interface State {
  users: User[];
}

export default combineReducers({
  usersReducer
});
