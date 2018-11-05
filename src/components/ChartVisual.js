import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import DroneContainer from "../store/container/DroneContainer";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
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
  }
}

class ChartVisual extends Component {
  render() {
    const { loading, drones, currentDrone, classes } = this.props;
    if (loading) {
      return <LinearProgress className={classes.progress} />;
    }
    return (
      <Card className={classes.card}>
        <CardHeader title="Chart Visualization"/>
        <CardContent>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(DroneContainer(ChartVisual))