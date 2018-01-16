import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web';
import Dashboard from './containers/dashboard';

// import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: <Route exact path="/dashboard" component={Dashboard} />,
  navItem: (
    <MenuItem key="/dashboard">
      <NavLink to="/dashboard" className="nav-link" activeClassName="active">
        dashboard
      </NavLink>
    </MenuItem>
  )
  // reducer: { post: reducers }
});
