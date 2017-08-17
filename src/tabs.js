// @flow weak
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

const TabContainer = props =>
  <div style={{ padding: 20 }}>
    {props.children}
  </div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
}));

  // let myString =  '';
class BasicTabs extends Component {
  state = {
    index: 0,
  };
  handleChange = (event, index) => {
    this.setState({ index });
    // switch(index){
    //   case 0:
    //   // 127.0.0.1:3000/posts?sortBy=d
    //   {
    //     myString = 'this is first tab';
    //   }
    //   case 1:
    //     myString = 'this is second tab';
    //   case 2:
    //     myString = 'this is third tab';
    //   default:
    // };
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Braavos Today
          </Typography>
        </Toolbar>
          <Tabs index={this.state.index} onChange={this.handleChange} centered>
            <Tab label="Hot" />
            <Tab label="New" />
            <Tab label="Top 10" />
          </Tabs>
        </AppBar>
        {this.state.index === 0 &&
          <TabContainer>
            {
              <div>
              <Typography type="title" color="inherit">
            {this.state.index}
          </Typography>

              <Card centered>
              <CardContent>
                <Typography type="headline" component="h2">
                  This is title with url
                </Typography>
                <Typography type="body1" >
                  This is body <br />
                  bodybodybody
                </Typography>
              </CardContent>
              <CardActions>
                <Button dense flat>This is comment</Button>
              </CardActions>
            </Card>
            </div>}
          </TabContainer>}
        {this.state.index === 1 &&
          <TabContainer>
            {`Item Two ${this.state.index}` }
          </TabContainer>}
            {/* console.log('hhh') */}
        {this.state.index === 2 &&
          <TabContainer>
            {'Item Three'}
          </TabContainer>}
      </div>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(BasicTabs);