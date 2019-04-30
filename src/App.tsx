import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import * as history from 'history';
import store from './store';
import {Router} from 'react-router-dom';
import Routes from './routes/route';

const historyConfig = history.createHashHistory();

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Router history={historyConfig}>
         <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
