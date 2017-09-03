// @flow weak
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input/Input';
// import FloatingActionButtons from './mainbutton.js'

const emails = ['username@gmail.com', 'user02@gmail.com'];

class SimpleDialog extends Component {
  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
  };


  render() {
    const { classes, onRequestClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Create a new post</DialogTitle>
        <div>
          {/* <List>
            {emails.map(email =>
              <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>,
            )}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List> */}
      {/* /> */}
      <Input

        label="Label"
        placeholder="URL"
        fullWidth
        margin="normal"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
         label="Label"
        placeholder="URL"
        fullWidth
        margin="wide"
        inputProps={{
          'aria-label': 'Description',
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
          'aria-label': 'Description',
        }}
      />
      <Button>
        POST
        </Button>

        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = SimpleDialog;

class SimpleDialogDemo extends Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleRequestClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        <Typography type="subheading">
          Selected: {this.state.selectedValue}
        </Typography>
        <br />
        <Button fab color='accent' aria-label="add" style={{ position: 'fixed', bottom: 50, right: 50 }} onClick={() => this.setState({ open: true })}>
        <AddIcon />
        </Button>
        {/* <FloatingActionButtons onClick={() => this.setState({ open: true })}>
      </FloatingActionButtons> */}
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;