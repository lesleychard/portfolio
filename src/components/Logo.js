import classNames from 'classnames';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

const LOGO_IMG = require('../assets/svg/logo.svg');

const styles = {
    root: {
        background: `url("${LOGO_IMG}") no-repeat center center`,
        backgroundSize: 'contain',
        fontSize: 0,
        maxWidth: '100%',
    },
    sizeSmall: {
        width: 185,
        height: 30,
    },
    sizeMedium: {
        width: 250,
        height: 39,
    },
    sizeLarge: {
        width: 340,
        height: 52,
    },
};

class Logo extends PureComponent {
    static defaultProps = {
        className: null,
        component: 'h1',
        size: 'medium',
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        className: PropTypes.string,
        component: PropTypes.string,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
    };

    render() {
        const {
            classes,
            className: classNameProp,
            component,
            size,
            ...other
        } = this.props;
        const Component = component;
        return (
            <Component
                className={classNames(
                    classes.root,
                    {
                        [classes.sizeSmall]: size === 'small',
                        [classes.sizeMedium]: size === 'medium',
                        [classes.sizeLarge]: size === 'large',
                    },
                    classNameProp,
                )}
                {...other}
            >
                Lesley Chard
            </Component>
        );
    }
}

export default withStyles(styles)(Logo);
