import React from "react";
import Drawer from "@material-ui/core/Drawer";
import NestedList from './ListItem.js'

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
            <NestedList />
        </div>
      </Drawer>
    );
  }
}
