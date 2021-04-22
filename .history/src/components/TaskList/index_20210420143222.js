import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";

class TaskList extends Component {
  render() {
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
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
  }
}

export default withStyles(styles)(TaskList);
