import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import TaskItem from "../TaskItem/index.js";

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            const { title } = task;
            return (
              <TaskItem /.
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
