import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/core-icons/Add";
// import blue from 'material-ui/colors/blue';

const styleSheet = createStyleSheet(theme => ({
  button: {
    margin: theme.spacing.unit,
    position: "fixed"
    // background: blue[600],
  }
}));

const handleClick = () => {
  console.log("hello");
};

function FloatingActionButtons(props) {
  const classes = props.classes;
  return (
    <div>
      <Button
        fab
        color="accent"
        aria-label="add"
        className={classes.button}
        style={{ position: "fixed", bottom: 50, right: 50 }}
      >
        <AddIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(FloatingActionButtons);
