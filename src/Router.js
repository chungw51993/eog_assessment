import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import MapVisual from "./components/MapVisual";
import DroneContainer from "./store/container/DroneContainer";

const styles = theme => ({
  app: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
})

class Router extends Component {
  componentWillMount() {
    this.props.onLoad();
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      setInterval(this.props.nextDrone, 3000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.props.nextDrone);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/map" component={MapVisual} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(DroneContainer(Router));
