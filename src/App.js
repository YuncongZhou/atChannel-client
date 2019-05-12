import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Comments from './comments.js'
import Typography from '@material-ui/core/Typography'
// import BasicTabs from './tabs.js'
import SimpleDialogDemo from './dialog.js'

// const Home = () => (
//   <div>
//     <SimpleDialogDemo />
//     <BasicTabs />
//   </div>
// )

const App = () => {
  return (
    <div>
      <AppBar />
    </div>
    // <Router>
    //   <div>
    //     <AppBar position='static'>
    //       <Toolbar>
    //         {/* <Typography type='title' color='inherit'>
    //         <Link to='/'>@Channel.tech</Link>
    //       </Typography> */}
    //       </Toolbar>
    //     </AppBar>
    //     <Route exact path='/' component={Home} />
    //     {/* <Route path='/comments/:id' component={Comments} /> */}
    //   </div>
    // </Router>
  )
}
export default App
