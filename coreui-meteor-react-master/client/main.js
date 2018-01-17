import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
// Containers
import Full from './containers/Full/'
// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

// import './scss/scss.scss'

// import { createHashHistory } from 'history'
//
// const history = createHashHistory({
//   basname: '',
//   hashType: 'slash'
// })

const history = createBrowserHistory();

Meteor.startup(() => {
  render(
    <Router history={history}>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login}/>
        <Route exact path="/register/go" name="Register Page" component={Register}/>
        <Route exact path="/404" name="Page 404" component={Page404}/>
        <Route exact path="/500" name="Page 500" component={Page500}/>
        <Route path="/" name="Home" component={Full}/>
      </Switch>
    </Router>,
    document.getElementById('root'));
});
