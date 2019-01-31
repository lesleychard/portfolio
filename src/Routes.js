import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {
    LOCATION_BACKGROUND,
    LOCATION_MY_WORK,
    LOCATION_WHAT_I_DO,
} from './location';
import {
    Background,
    Home,
    Layout,
    MyWork,
    WhatIDo,
} from './pages';

export default function Routes() {
    return (
        <Switch>
            <Route
                render={props => (
                    <Layout
                        bottom={(
                            <Route
                                exact
                                path={`/${LOCATION_WHAT_I_DO}`}
                                component={WhatIDo}
                            />
                        )}
                        main={(
                            <Route
                                exact
                                path="/"
                                component={Home}
                            />
                        )}
                        right={(
                            <Route
                                exact
                                path={`/${LOCATION_MY_WORK}`}
                                component={MyWork}
                            />
                        )}
                        left={(
                            <Route
                                exact
                                path={`/${LOCATION_BACKGROUND}`}
                                component={Background}
                            />
                        )}
                        {...props}
                    />
                )}
                path="/"
            />
        </Switch>
    );
}
