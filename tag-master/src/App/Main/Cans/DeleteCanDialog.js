import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from 'material-ui';
import Colors from '../Colors';
import { StyleSheet, css } from 'aphrodite';

export default class DeleteCanDialog extends Component {

  state = {
    show: false,
    tags: '',
  };

  getTags = (item) => {
    let tags = '';
    item.forEach((child) => {
      tags += ' #' + child;
    });
    return tags;
  };

  changeDialogState = (tags, id) => {
    this.setState({ show: !this.state.show, tags: this.getTags(tags), id });
  };

  hideDialog = () => {
    this.setState({ show: !this.state.show });
  };

  deleteTag = () => {
    this.props.delete(this.state.tags, this.state.id);
    this.hideDialog();
  };

  render() {
    return (
      <Dialog
        open={this.state.show}
        onClose={this.hideDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete {this.state.tags}?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            After deletion, you will lose all data related to this canned response and also you won't be able to use it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.hideDialog} className={css(styles.cancel)}>
            Cancel
          </Button>
          <Button onClick={this.deleteTag} className={css(styles.delete)}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DeleteCanDialog.propTypes = {
  delete: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  cancel: {
    color: Colors.canMainColor,
  },
  delete: {
    color: '#F44336',
  }
});
