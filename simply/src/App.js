import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './components/Home';


injectTapEventPlugin();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Home />
        </MuiThemeProvider>
    );
  }
}

export default App;
