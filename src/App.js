import React, {Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme'

//Components
import Navbar from "./components/Navbar";

//pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

const theme = createMuiTheme(themeFile)

class App extends Component {
      render() {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Router>
              <Navbar />
                <div className="container">
                  <Switch>
                    <Route path="/" component={home} exact/>
                    <Route path="/login" component={login} />
                    <Route path="/signup" component={signup} />
                  </Switch>
                </div>
            </Router>
          </div>
        </MuiThemeProvider>
      );
    }
  } 


export default App;
