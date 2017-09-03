// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import 'typeface-roboto';
import renderHTML from 'react-render-html';

function SimpleCard(props) {
  if (props === undefined ){
    return null
  }
  return (
    <div  key={props['_id']}>
      <Card>
        <CardHeader title={renderHTML(`<a href="${props['url']}">${props['title']}</a>` )}/>
        <CardContent>
          <Typography type="body2" >
            {props['body']}
          </Typography>
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