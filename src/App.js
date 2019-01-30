import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Nav} from './components';
import Routes from './Routes';
import {Theme} from './theme';

export default function App() {
    return (
        <Theme>
            <Router>
                <Fragment>
                    <Route path="/" component={Nav} />
                    <Routes />
                </Fragment>
            </Router>
        </Theme>
    );
}
