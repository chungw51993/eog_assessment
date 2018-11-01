import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.main,
    height: "100vh",
    borderRight: "1px solid black"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "150px",
    height: "100vh"
  },
  link: {
    textDecoration: "none",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "20px",
    color: "#ffffff"
  },
  active: {
    color: "rgb(39,49,66)",
    fontWeight: 600
  }
});

const Navigation = props => {
  const { classes } = props;

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
      >
        <Paper className={classes.paper}>
          <List
            className={classes.list}
          >
            <ListItem
              button
              component={() => <NavLink className={classes.link} activeClassName={classes.active} to="/" exact>Dashboard</NavLink>}
            >
            </ListItem>
            <ListItem
              button
              component={() => <NavLink className={classes.link} activeClassName={classes.active} to="/map" exact>Map Visual</NavLink>}
            >
            </ListItem>
            <ListItem
              button
              component={() => <NavLink className={classes.link} activeClassName={classes.active} to="/chart" exact>Chart Visual</NavLink>}
            >
            </ListItem>
          </List>
        </Paper>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(Navigation);