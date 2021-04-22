import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

class Taskboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon /> Add new tasks
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
