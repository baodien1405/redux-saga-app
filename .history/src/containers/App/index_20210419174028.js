import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import styles from "./styles.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../commons/Theme";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <h1>Hello Redux Saga</h1>
          <Button variant="contained" color="primary">
            Button
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
