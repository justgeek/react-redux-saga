import { all, fork } from "redux-saga/effects";
import { watchGetUsers } from "MainContainers/UsersContainer/saga";
export default function* rootSaga() {
  yield all([fork(watchGetUsers)]);
}
