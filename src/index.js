import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import Tabs, { Tab } from 'material-ui/Tabs';
import 'typeface-roboto'
// import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
import Card, { CardActions, CardContent } from 'material-ui/Card';
// import Toolbar from 'material-ui/Toolbar';
// import Dialog, {
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
// } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 6,
    border: 0,
    color: 'blue',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
});



const App = () => {
  return (
    <div>
      <Typography type="headline" gutterBottom>
        Alpha-ch
      </Typography>
      {/* <Dialog>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.handleRequestClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog> */}
      <Tabs
          indicatorColor="primary"
          textColor="lightblue"
          centered
        >
          <Tab label="Hot" />
          <Tab label="New" />
          <Tab label="Top 10" />
      </Tabs>

      <Typography type="display1" gutterBottom>
        Material-UI
      </Typography>
      <Typography type="subheading" gutterBottom>
        example project
      </Typography>
      <Button raised color="accent" onClick={this.handleClick}>
        Super Secret Password
      </Button>
      <Card centered>
        <CardContent>
          <Typography type="body1" >
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            benevolent
          </Typography>
          <Typography type="body1" >
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

render(<App />, document.querySelector('#root'));
