import * as React from "react";
import { StyledHeaderTitle, StyledHeaderVersion } from "./styles";

export default class HeaderComponent extends React.PureComponent {
  render() {
    return (
      <StyledHeaderTitle>
       React Redux Saga
        <StyledHeaderVersion>v 0.1</StyledHeaderVersion>
      </StyledHeaderTitle>
    );
  }
}
