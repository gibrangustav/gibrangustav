import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { NavDrawer } from "./NavDrawer";
import Grid from '@material-ui/core/Grid';
import SimpleModalWrapped from './Modal.js'

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false
    };
  }
  toggleDrawer = booleanValue => () => {
    this.setState({
      drawerOpened: booleanValue
    });
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
             <Grid
              justify="space-between" // Add it here :)
              container 
              spacing={24}
            >
                <Grid item>
                  <Typography variant="h6" color="inherit">
                    Gibran Gustav
                  </Typography>
                </Grid>

                <Grid item>
                  <div>
                    <SimpleModalWrapped />
                  </div>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <NavDrawer
          drawerOpened={this.state.drawerOpened}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}
