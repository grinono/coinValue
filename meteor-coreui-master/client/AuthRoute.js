import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {Meteor} from 'meteor/meteor'

//Mock of an Auth method, can be replaced with an async call to the backend. Must return true or false
const isAuthenticated = () => {
    if (Meteor.user() != null) {
        return true
    } else {
        return false
    }
};

const PRIVATE_ROOT = '/private';
const PUBLIC_ROOT = '/login';

const AuthRoute = ({component, ...props}) => {
    // const { isPrivate } = component;
    if (isAuthenticated()) {
        //User is Authenticated
        return <Route {...props} component={component}/>;
    }
    else {
        return <Redirect to={PUBLIC_ROOT}/>;
    }

}


AuthRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ])
};

export default AuthRoute;