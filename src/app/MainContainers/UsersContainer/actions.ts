import actionCreatorFactory from "typescript-fsa";
import { User } from "./reducer";
const actionCreator = actionCreatorFactory();

export interface getCitiesPayload {
  data: User[];
}

export const doGetUsers = actionCreator("GET_USERS");
export const gettingUsers = actionCreator.async<{}, getCitiesPayload>(
  "GETTING_USERS"
);
