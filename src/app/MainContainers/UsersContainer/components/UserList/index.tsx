import * as React from "react";
import { User } from "MainContainers/UsersContainer/reducer";
import UserListItem from "./components/UserListItem";

interface Props {
  users: User[];
}

export default class UserList extends React.PureComponent<Props> {
  private renderUser(user: User, index: number) {
    return <UserListItem user={user} key={user.id} />;
  }
  render() {
    const { users } = this.props;
    return <ul>{users.map(this.renderUser)}</ul>;
  }
}
