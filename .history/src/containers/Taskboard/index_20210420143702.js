import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import TaskList from "../../components/TaskList/index.js";
import { STATUSES } from "../../constants/index.js";
import styles from "./styles.js";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Go fishing",
    description: "Fishing on Sunday",
    status: 2,
  },
  {
    id: 3,
    title: "Shopping",
    description: "Shopping with my friend",
    status: 1,
  },
];

class Taskboard extends Component {
  renderBoard = () => {
    const { classes } = this.props;
    let html = null;
    html = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList />;
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
