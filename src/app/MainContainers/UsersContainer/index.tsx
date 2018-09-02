import * as React from "react";
import { doGetUsers } from "./actions";
import { connect } from "react-redux";
import { State as AppState } from "../../Store/reducers";
import { selectUsers } from "MainContainers/UsersContainer/selectors";
import UserListComponent from "./components/UserList";

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;
class UsersContainer extends React.PureComponent<Props> {
  componentDidMount() {
    const { doGetUsers } = this.props;
    doGetUsers();
  }
  render() {
    const { users } = this.props;
    return <UserListComponent users={users} />;
  }
}

const mapDispatchToProps = {
  doGetUsers
};

const mapStateToProps = (state: AppState) => {
  return {
    users: selectUsers(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
