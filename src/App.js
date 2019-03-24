import React, {Fragment} from 'react';
import {Router, Route} from 'react-router-dom';

import {Nav} from './components';
import history from './history';
import Routes from './Routes';
import {Theme} from './theme';

export default function App() {
    return (
        <Theme>
            <Router history={history}>
                <Fragment>
                    <Route path="/" component={Nav} />
                    <Routes />
                </Fragment>
            </Router>
        </Theme>
    );
}
