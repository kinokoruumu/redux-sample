import React, { Component } from 'react';
import { Provider } from "react-redux";

import history from './router/history'
import store from './store'
import Router from './router/router'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    );
  }
}

export default App;
