import React from 'react';
import { Route, NavLink } from 'react-router-dom';
// import { MenuItem } from '../../modules/common/components/web';

import Home from './containers/home';
// import PostEdit from './containers/PostEdit';
//
// import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: <Route path="/home" component={Home} />
});
