import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Route exact path="/" component={Home}/>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
