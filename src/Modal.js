import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import ComposedTextField from './TextField';
function getModalStyle() {
  const top = 25;
  const left = 25;

  return {
    top: `${top}%`,
    margin:'auto'
    // left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    checked: false,
  };

  handleOpen = () => {
    this.setState({
      open: true,
      checked: !this.state.checked
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <Button color='inherit' variant='outlined' onClick={this.handleOpen}>Login</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <Slide direction="up" in={this.state.open} mountOnEnter unmountOnExit>
            <div style={getModalStyle()} className={classes.paper}>
              <ComposedTextField />
            </div>
            </Slide>
          </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;