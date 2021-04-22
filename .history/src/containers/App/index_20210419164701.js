import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Redux Saga</h1>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <div className="">
          <div className="">ReactJS</div>
          <div className="">Angular</div>
          <div className="">VueJS</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
