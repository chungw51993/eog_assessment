import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import MapVisual from "./components/MapVisual";
import ChartVisual from "./components/ChartVisual";
import DroneContainer from "./store/container/DroneContainer";

const styles = theme => ({
  app: {
    display: "flex",
    height: "calc(100% - 64px)",
    alignItems: "center",
    justifyContent: "center"
  }
})

class Router extends Component {
  componentWillMount() {
    this.props.onLoad();
    setInterval(this.props.onLoad, 3000);
  }

  componentWillReceiveProps(nextProps) {
    const { drones: cDrones, currentDrone: currDrone } = this.props;
    const { drones, currentDrone } = nextProps;
    if (drones[currentDrone]) {
      if (!cDrones[currDrone] && drones[currentDrone]) {
        this.props.loadWeather(drones[currentDrone].latitude, drones[currentDrone].longitude);
      } else if (drones[currentDrone].latitude !== cDrones[currDrone].latitude ||
      drones[currentDrone].longitude !== cDrones[currDrone].longitude) {
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.props.onLoad);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/map" component={MapVisual} />
          <Route exact path="/chart" component={ChartVisual} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(DroneContainer(Router));
