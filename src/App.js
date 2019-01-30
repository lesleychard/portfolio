import {ThemeProvider} from '@material-ui/styles';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components';
import theme from './theme';

import Routes from './Routes';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Fragment>
                    <Route path="/" component={Nav} />
                    <Routes />
                </Fragment>
            </Router>
        </ThemeProvider>
    );
}
