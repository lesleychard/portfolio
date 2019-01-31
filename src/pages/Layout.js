import classNames from 'classnames';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {
    LOCATION_BACKGROUND,
    LOCATION_MY_WORK,
    LOCATION_WHAT_I_DO,
} from '../location';

const backgroundImg = require('../assets/img/main-background.jpg');

const styles = theme => ({
    root: {
        background: theme.palette.primary.main,
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
    },
    container: {
        display: 'flex',
        minWidth: '100vw',
        transition: `transform ${theme.transitions.duration.layout}ms`,
        '& > div': {
            flex: '0 0 100vw',
            minHeight: '100vh',
        },
    },
    containerActiveCenter: {
        transform: 'translate(-100vw, 0)',
    },
    containerActiveLeft: {
        transform: 'translate(0, 0)',
    },
    containerActiveRight: {
        transform: 'translate(-200vw, 0)',
    },
    center: {
        height: '100vh',
        overflow: 'hidden',
        width: '100%',
    },
    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        transition: `transform ${theme.transitions.duration.layout}ms`,
        '& > div': {
            flex: '0 0 100vh',
            width: '100vw',
        },
    },
    centerContainerActiveMain: {
        transform: 'translate(0, 0)',
    },
    centerContainerActiveBottom: {
        transform: 'translate(0, -100vh)',
    },
    main: {
        background: `${theme.palette.primary.light} url(${backgroundImg}) no-repeat center center`,
        backgroundSize: 'cover',
        height: '100vh',
    },
    bottom: {
        background: theme.palette.primary.main,
    },
    left: {
        background: theme.palette.primary.main,
    },
    right: {
        background: theme.palette.background.main,
    },
    scrollWrapper: {
        width: '100%',
        maxHeight: '100vh',
        overflow: 'auto',
    },
});

class Layout extends PureComponent {
    static defaultProps = {
        bottom: null,
        left: null,
        main: null,
        right: null,
    };

    static propTypes = {
        bottom: PropTypes.node,
        classes: PropTypes.object.isRequired,
        left: PropTypes.node,
        location: PropTypes.object.isRequired,
        main: PropTypes.node,
        right: PropTypes.node,
    };

    render() {
        const {
            bottom,
            classes,
            left,
            location,
            main,
            right,
        } = this.props;
        const centerActive = location.pathname === '/' || location.pathname === `/${LOCATION_WHAT_I_DO}`;
        return (
            <div className={classes.root}>
                <div
                    className={classNames(
                        classes.container,
                        {
                            [classes.containerActiveCenter]: centerActive,
                            [classes.containerActiveLeft]: location.pathname === `/${LOCATION_BACKGROUND}`,
                            [classes.containerActiveRight]: location.pathname === `/${LOCATION_MY_WORK}`,
                        },
                    )}
                >
                    <div className={classes.left}>
                        <div className={classes.scrollWrapper}>
                            {left}
                        </div>
                    </div>
                    <div className={classes.center}>
                        <div
                            className={classNames(
                                classes.centerContainer,
                                {
                                    [classes.centerContainerActiveBottom]: location.pathname === `/${LOCATION_WHAT_I_DO}`,
                                    [classes.centerContainerActiveMain]: location.pathname === '/',
                                },
                            )}
                        >
                            <div className={classes.main}>
                                {main}
                            </div>
                            <div className={classes.bottom}>
                                {bottom}
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.scrollWrapper}>
                            {right}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Layout);
