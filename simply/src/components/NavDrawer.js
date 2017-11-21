import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class NavDrawer extends React.Component {
  handleClose = () => !this.props.open;
  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={'30%'}
          open={this.props.open}
        >
          <MenuItem onClick={this.props.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.props.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}