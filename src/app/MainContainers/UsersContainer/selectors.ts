import { State as AppState } from "../../Store/reducers";

export const selectUsers = (state: AppState) => {
  return state.users;
};
