import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import styles from "./styles.js";

class TaskItem extends Component {
  render() {
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
  }
}

export default withStyles(styles)(TaskItem);
