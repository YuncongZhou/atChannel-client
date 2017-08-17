import React, { Component }  from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import Tabs, { Tab } from 'material-ui/Tabs';
import 'typeface-roboto'
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Card, { CardActions, CardContent } from 'material-ui/Card';
// import Toolbar from 'material-ui/Toolbar';
// import Dialog, {
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
// } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import BasicTabs from './tabs.js'
import FloatingActionButtons from './buttons.js'


const App = () => {
  return (
    <div>
       <BasicTabs>
      </BasicTabs>
      <FloatingActionButtons>
      </FloatingActionButtons>
    </div>
  );
}

render(<App />, document.querySelector('#root'));
