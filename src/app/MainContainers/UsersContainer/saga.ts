import { takeLatest, call, put } from "redux-saga/effects";
import { doGetUsers, gettingUsers } from "./actions";
import { UserService } from "./services";

// watch for disptached action of type FETCH_CITIES
function* getUsers() {
  yield put(gettingUsers.started({}));
  try {
    const result = yield call(UserService.getUsers);
    yield put(gettingUsers.done({ params: {}, result: { data: result } }));
  } catch (e) {
    yield put(gettingUsers.failed({ params: {}, error: {} }));
  }
}

export function* watchGetUsers() {
  yield takeLatest(doGetUsers, getUsers);
}
export default [watchGetUsers];
