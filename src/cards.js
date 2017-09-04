// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import 'typeface-roboto';
import renderHTML from 'react-render-html';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function SimpleCard(props) {
  if (props === undefined ){
    return null
  }
  let titleClick;
  const linking  = `/post/${props._id}`
  if (props.url) {
    titleClick = renderHTML(`<a href="${props['url']}">${props['title']}</a>` );
  } else {
    // titleClick = props['title'];
    // titleClick = renderHTML(`<a href="${linking}">${props['title']}</a>` );
    titleClick = renderHTML(`<a href="/about">${props['title']}</a>` );
  };

  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )
  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )

  return (
    <div  key={props['_id']}>
      <Card>
        <CardHeader title={titleClick} />
        <CardContent>
          <Typography type="body2" >
            {props['body']}
          </Typography>
          {/* <Router>
        <Link to={`/post/${props._id}`}>Home</Link>
    <Route exact path="/" component={Home}/>
    <Route path={linking} component={About}/>
    </Router> */}
          <Typography component="p">
           submitted on {props['timestamp']}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>{props['child_ids'].length} comments</Button>
        </CardActions>
      </Card>
    </div>
  );
}



SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleCard;