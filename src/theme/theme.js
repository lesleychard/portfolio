import {create} from 'jss';
import jssExtend from 'jss-extend';
import {createMuiTheme} from '@material-ui/core';
import {
    jssPreset,
    StylesProvider,
    ThemeProvider,
} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {
    globals,
    palette,
    transitions,
    typography,
} from '.';

const jss = create();
jss.use(jssExtend());
jss.setup(jssPreset());

const MUI_THEME = createMuiTheme({
    palette,
    transitions,
    typography,
});

class Theme extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    componentDidMount() {
        jss.createStyleSheet(
            globals(MUI_THEME),
            {meta: 'LcGlobals'},
        ).attach();
    }

    render() {
        const {children} = this.props;
        return (
            <StylesProvider jss={jss}>
                <ThemeProvider theme={MUI_THEME}>
                    {children}
                </ThemeProvider>
            </StylesProvider>
        );
    }
}

export default Theme;
