// import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'typeface-roboto'
import BasicTabs from './tabs.js'
import FloatingActionButtons from './mainbutton.js'
import SimpleDialogDemo from './dialog.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Comments from './comments.js'

const Home = () => (
  <div>
         <SimpleDialogDemo />
       <BasicTabs />
  </div>
)

const App = () => {
  return (
        <Router>
    <div>
    <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            <Link to='/'>@chan</Link>
          </Typography>
        </Toolbar>
        </AppBar>
         <Route exact path="/" component={Home}/>
         <Route path="/comments/:id" component={Comments} />
      {/* <FloatingActionButtons>
      </FloatingActionButtons> */}
    </div>
    </Router>
  );
}

render(<App />, document.querySelector('#root'));
