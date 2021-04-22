import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import styles from "./styles.js";
import { ThemeProvider } from "@material-ui/core/styles";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <h1>Hello Redux Saga</h1>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <div className={classes.box}>
          <div className={classes.shape}>ReactJS</div>
          <div className={classes.shape}>Angular</div>
          <div className={classes.shape}>VueJS</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
