// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

function SimpleCard(props) {
  if (props === undefined ){
    return null
  }
  return (
    <div>
      <Card >
        <CardContent>
          <Typography type="body1">
            {props['_id']}
          </Typography>
          <Typography type="headline" component="h2">
            {props['title']}
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

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleCard;