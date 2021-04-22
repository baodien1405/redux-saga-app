import { Typography, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import styles from "./styles.js";

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title } = task;
    return (
      <Card key={id} className={classes.card}>
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
          <Fab color="primary" aria-label="edit" className={classes.fab}>
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="action" aria-label="delete" className={classes.fab}>
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
