// actions.ts
import { isType, actionCreatorFactory } from "typescript-fsa";
import { Action } from "redux";
import { gettingUsers } from "./actions";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const initialState: User[] = [];
export const users = (state = initialState, action: Action) => {
  if (isType(action, gettingUsers.done)) {
    const {
      payload: {
        result: { data }
      }
    } = action;
    return data;
  }

  return state;
};
