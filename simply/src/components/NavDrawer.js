// import React from 'react';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

// export default class NavDrawer extends React.Component {
//   handleClose = () => !this.props.open;
//   render() {
//     return (
//       <div>
//         <Drawer
//           docked={false}
//           width={'30%'}
//           open={this.props.open}
//         >
//           <MenuItem onClick={this.props.handleClose}>Menu Item</MenuItem>
//           <MenuItem onClick={this.props.handleClose}>Menu Item 2</MenuItem>
//         </Drawer>
//       </div>
//     );
//   }
// }

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class NavDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List onClick={this.props.handleClose}>Item 1</List>
        <Divider />
        <List onClick={this.props.handleClose}>Item 2</List>
      </div>
    );

    return (
      <div>
        {/* <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button> */}
        <Drawer open={this.props.open} onRequestClose={this.props.handleClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.handleClose}
            onKeyDown={this.props.handleClose}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);