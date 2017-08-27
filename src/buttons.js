import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
// import ModeEditIcon from 'material-ui-icons/ModeEdit';

const styleSheet = createStyleSheet(theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
  },
}));

const handleClick =() =>{
  console.log('hello')
}

function FloatingActionButtons(props) {
  const classes = props.classes;
  return (
    <div>
      <Button fab color='accent' aria-label="add" className={classes.button} style={{ position: 'fixed', bottom: 50, right: 50 }} onClick={handleClick}>
        <AddIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(FloatingActionButtons);
