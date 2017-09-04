import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto'
import BasicTabs from './tabs.js'
import FloatingActionButtons from './mainbutton.js'
import SimpleDialogDemo from './dialog.js'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SimpleCard from './cards.js'
import Tabs, { Tab } from 'material-ui/Tabs';
import PaperSheet from './paper.js'

// using CommonJS modules
// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Switch = require('react-router').Switch
// var Link = require('react-router').Link

const theme = createMuiTheme();

const Home = () => (
  <div>
         <SimpleDialogDemo />
       <BasicTabs />
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const fetchPost = async( id ) =>{
  const url = `http://localhost:4000/comments/${id}`
  console.log(url)
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}

const getPost = ( {match} ) =>{
  // const url = `http://localhost:4000/post${match.params.id}`
  // const response = await fetch(url);
  // const posts = await response.json();
  const posts =  fetchPost(match.params.id)
  console.log(posts)

  // let postPromise = fetchPost(match.params.id);
  // let comments = []
  // comments = postPromise.then( (posts) => {
  //   console.log(posts)
    // comments = posts
    // return posts
    // return (
    //   <div>
    //     {posts.map(SimpleCard)}
    //   </div>
    // )
  // })
  // console.log(comments)
  // render() ;{
  //   const classes = this.props.classes;
  //   if (posts === undefined) {
  //     return null
  //   } else {

      return (
        <div>
          {/* <PaperSheet /> */}
          {/* <SimpleCard name={posts[0]} /> */}
          {/* {posts.map(SimpleCard)} */}
          <h2>hello {match.params.id}</h2>
          {/* {comments.map(SimpleCard)} */}
          {/* <BasicTabs /> */}
        </div>
      )
    // }
    // { (  ) => <div>{match}</div>}
  // }
}
const App = () => {
  return (
        <Router>
    <div>
    {/* <Link to="/">Home</Link>
    <Link to="/about">about</Link> */}
    <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            @chan
          </Typography>
        </Toolbar>
        </AppBar>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/comments/:id" component={getPost} />
      {/* <SimpleDialogDem />
       <BasicTabs /> */}

      {/* <FloatingActionButtons>
      </FloatingActionButtons> */}
    </div>
    </Router>
  );
}
    //   <Link to="/test">Home</Link>
      //       <MuiThemeProvider theme={theme}>
      // </MuiThemeProvider>

render(<App />, document.querySelector('#root'));
