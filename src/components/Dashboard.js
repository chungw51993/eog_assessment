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
    width: "100%"
  }
}

class Dashboard extends Component {
  render() {
    const { loading, drones, currentDrone, classes } = this.props;
    // if (loading) {
    //   return <LinearProgress className={classes.progress}/>;
    // }
    return (
      <Card className={classes.card}>
        <CardHeader title="Dashboard"/>
        <CardContent>
          <Typography align="justify">
            Temperature: 100
          </Typography>
          <Typography align="justify">
            Latitude:
          </Typography>
          <Typography align="justify">
            Longitude:
          </Typography>
          <Typography align="justify">
            Last Received:
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default withStyles(styles)(DroneContainer(Dashboard));
