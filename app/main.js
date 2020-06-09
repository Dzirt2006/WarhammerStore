import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import store from './storeForProducts';


ReactDOM.render(

  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
