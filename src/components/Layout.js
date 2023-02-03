import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Services from './Services';
import Skills from './Skills';
import Portfolio from './Portfolio';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact-us">
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button component={Link} to="/services">
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={Link} to="/skills">
              <ListItemText primary="Skills" />
            </ListItem>
            <ListItem button component={Link} to="/portfolio">
              <ListItemText primary="Portfolio" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}
