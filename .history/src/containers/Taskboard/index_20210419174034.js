import React, { Component } from "react";

class Taskboard extends Component {
  render() {
    return (
      <div className={classes.box}>
        <div className={classes.shape}>ReactJS</div>
        <div className={classes.shape}>Angular</div>
        <div className={classes.shape}>VueJS</div>
      </div>
    );
  }
}

export default Taskboard;
