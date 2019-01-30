import React, {Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

export default function App() {
    return (
        <Router>
            <Fragment>
                {/* <Route path="/" component={Nav} /> */}
                <Routes />
            </Fragment>
        </Router>
    );
}
