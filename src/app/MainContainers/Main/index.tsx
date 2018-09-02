import { NavLink, Switch, Route } from "react-router-dom";
import * as React from "react";
import { RouteType, appRoutes } from "../../Config/routes.config";
import HeaderComponent from "CommonComponents/HeaderComponent";
import { StyledMain } from "./styles";

export default class Main extends React.PureComponent {
  private renderRoute = (route: RouteType, index: number) => {
    return (
      <Route
        exact
        path={route.path}
        component={route.component}
        key={index}
        history={history}
      />
    );
  }
  render() {
    return (
      <StyledMain>
        <HeaderComponent />
        <Switch>{appRoutes.map(this.renderRoute)}</Switch>
      </StyledMain>
    );
  }
}
