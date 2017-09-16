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
    titleClick = renderHTML(`<a href="/comments/${props['_id']}">${props['title']}</a>` );
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

  const upvote = () => vote(1)
  const downvote = () => vote(0)

  const vote = ( like ) => {
    let body;
    if (like) {
      body = {direction: 1}
    } else {
      body = {direction: 0}
    }
    const url = `${process.env.REACT_APP_API_ROOT}votes/${props['_id']}`
    const a = fetch(url, {
      method: 'put',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div  key={props['_id']}>
      <Card>
        <CardHeader title={titleClick} />
        <CardContent>
          <Typography type="body2" >
            {props['body']}
          </Typography>
          <Typography component="p">
           submitted on {props['timestamp']}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={`/comments/${props['_id']}`} dense>comments</Button>
          <Button dense onClick={upvote}>{props['upvote']} UPVOTE</Button>
          <Button dense onClick={downvote}>{props['downvote']} DOWNVOTE</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleCard;