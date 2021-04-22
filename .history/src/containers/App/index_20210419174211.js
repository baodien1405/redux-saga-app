import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import styles from "./styles.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../commons/Theme";
import Taskboard from "../Taskboard/index.js";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Taskboard />
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
