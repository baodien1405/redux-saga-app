import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants/index.js";

class Taskboard extends Component {
  renderBoard = () => {
    let html = null;
    html = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          return (
            <Grid item md={4} xs={12}>
              TODO
            </Grid>
          );
        })}
      </Grid>
    );
    return html;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon /> Add new tasks
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
