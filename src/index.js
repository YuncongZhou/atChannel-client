import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Toolbar from '@material-ui/core/Toolbar'
// import AppBar from '@material-ui/core/AppBar'
// import Typography from '@material-ui/core/Typography'
// import BasicTabs from './tabs.js'
// import SimpleDialogDemo from './dialog.js'
// import Comments from './comments.js'
// import 'typeface-roboto'
import * as serviceWorker from './serviceWorker'

// const Home = () => <div>{/* <SimpleDialogDemo />
//     <BasicTabs /> */}</div>

// const App = () => {
//   return (
//     <Router>
//       <div>"Hello, World."</div>
//       <div>
//         <AppBar position='static'>
//           <Toolbar>
//             {/* <Typography type='title' color='inherit'>
//               <Link to='/'>@Channel.tech</Link>
//             </Typography> */}
//           </Toolbar>
//         </AppBar>
//         {/* <Route exact path='/' component={Home} />
//         <Route path='/comments/:id' component={Comments} /> */}
//       </div>
//     </Router>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
