import { combineReducers } from "redux";
import { users, User } from "MainContainers/UsersContainer/reducer";

export interface State {
  users: User[];
}

export default combineReducers({
  users
});
