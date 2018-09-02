import * as React from "react";
import { User } from "MainContainers/UsersContainer/reducer";

interface Props {
  user: User;
}

export default class UserListItem extends React.PureComponent<Props> {
  render() {
    const { user } = this.props;
    return <li>{user.name}</li>;
  }
}
