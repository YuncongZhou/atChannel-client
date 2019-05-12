// @flow weak
/* eslint-disable react/no-multi-comp */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog, { DialogTitle } from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import Input from "@material-ui/core/Input/Input";

class SimpleDialog extends Component {
  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  render() {
    const { classes, onRequestClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Create a new post</DialogTitle>
        <div>
          <Input
            label="Label"
            placeholder="URL"
            fullWidth
            margin="normal"
            inputProps={{
              "aria-label": "Description"
            }}
          />
          <Input
            label="Label"
            placeholder="URL"
            fullWidth
            margin="wide"
            inputProps={{
              "aria-label": "Description"
            }}
          />
          <Input
            label="Label"
            placeholder="Body"
            fullWidth
            multiline
            rows="4"
            margin="normal"
            inputProps={{
              "aria-label": "Description"
            }}
          />
          <Button>POST</Button>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  selectedValue: PropTypes.string
};

class SimpleDialogDemo extends Component {
  state = {
    open: false
  };

  handleRequestClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        <Button
          fab
          color="accent"
          aria-label="add"
          style={{ position: "fixed", bottom: 50, right: 50 }}
          onClick={() => this.setState({ open: true })}
        >
          <AddIcon />
        </Button>
        <SimpleDialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;
