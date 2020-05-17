import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    heroButtons: {
    marginTop: theme.spacing(4),
  },
  },
}));

export default function ComposedTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid item xs={12}>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" />
      </FormControl>
      </Grid>
      <Grid item xs={12}>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Password</InputLabel>
        <FilledInput id="component-filled" />
      </FormControl>
      </Grid>
      <div className={classes.heroButtons}>
        <Grid container justify="center">
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
