import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants/index.js";

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
          return (
            <Grid item md={4} xs={12} key={status.value}>
              <Box>
                <div className={classes.status}>{status.label}</div>
              </Box>
              <div className={classes.wrapperListTask}>
                {taskFiltered.map((task) => {
                  const { title } = task;
                  return (
                    <Card key={task.id} className={classes.card}>
                      <CardContent>
                        <Grid container justify="space-between">
                          <Grid item md={8}>
                            <Typography component="h2">{title}</Typography>
                          </Grid>
                          <Grid item md={4}>
                            {status.label}
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button size="small"></Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </div>
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
