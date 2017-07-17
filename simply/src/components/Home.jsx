import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Home extends Component {

  render() {
    return (
      <AppBar
        title="Simply"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    );
  }
}