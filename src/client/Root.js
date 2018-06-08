

// #region imports
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import home from './pages/'
// import compose from 'recompose/compose';
// import configureStore from './redux/store/configureStore';
import createHistory from 'history/createHashHistory';

import { combineReducers, createStore } from 'redux';
// import ScrollTop from './components/scrollToTop/ScrollToTop';
// import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import { PageNotFound } from './routes/routes';
// import { PageNotFound } from './routes/routes';
// #endregion

// #region flow types

// #endregion
// const App = () => <h1>eeee</h1>

// #region constants
// const MainApp = compose(withMainLayout())(MainRoutes);
const byPost = (state={}, action)=> {
    switch(action.type){
        default: return state
    }
}
const posts = combineReducers({byPost})
const store = createStore(posts, )
const history = createHistory()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>      
            
            <MainRoutes />
            
            
          </Router>      
      </Provider>
    );
  }
}
