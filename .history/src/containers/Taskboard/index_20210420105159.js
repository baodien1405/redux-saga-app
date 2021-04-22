import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Button from "@material-ui/core/Button";

class Taskboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary"></Button>
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
