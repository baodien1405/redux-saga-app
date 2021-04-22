import { withStyles } from "@material-ui/core";
import styles from "./styles";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Redux Saga</h1>
      </div>
    );
  }
}

export default withStyles()(App);
