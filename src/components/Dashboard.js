import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import DroneContainer from "../store/container/DroneContainer";
import moment from "moment";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    width: "80%",
    height: "80%"
  },
  progress: {
    width: "90%"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    margin: "0 auto",
    height: "calc(100% - 63px)",
    justifyContent: "space-evenly"
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "25px"
  }
}

class Dashboard extends Component {
  render() {
    const { loading, drones, currentDrone, classes, weather } = this.props;
    if (loading || !weather) {
      return <LinearProgress className={classes.progress}/>;
    }
    return (
      <Card className={classes.card}>
        <CardHeader title="Dashboard"/>
        <CardContent className={classes.content}>
          <Typography className={classes.text}>
            <span>City: </span><span>{ weather.name }</span>
          </Typography>
          <Typography className={classes.text}>
            <span>Temperature: </span><span>{ Math.round(weather.temperatureinFahrenheit) }°F</span>
          </Typography>
          <Typography className={classes.text}>
            <span>Forecast: </span><span>{ weather.weather_state_name }</span>
          </Typography>
          <Typography className={classes.text}>
            <span>Metric: </span><span>{ drones[currentDrone].metric }</span>
          </Typography>
          <Typography className={classes.text}>
            <span>Latitude: </span><span>{ drones[currentDrone].latitude }</span>
          </Typography>
          <Typography className={classes.text}>
            <span>Longitude: </span><span>{ drones[currentDrone].longitude }</span>
          </Typography>
          <Typography className={classes.text}>
            <span>Last Received: </span><span>{ moment(drones[currentDrone].timestamp).fromNow() }</span>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default withStyles(styles)(DroneContainer(Dashboard));
