import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
    Home,
    MyWork,
} from './pages';

export default function Routes() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Home}
            />
            <Route
                exact
                path="/my-work"
                component={MyWork}
            />
        </Switch>
    );
}
