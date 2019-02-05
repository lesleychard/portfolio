import classNames from 'classnames';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {
    LOCATION_BACKGROUND,
    LOCATION_MY_WORK,
    LOCATION_WHAT_I_DO,
} from '../location';

const HOME_BACKGROUND_IMG = require('../assets/img/main-background.jpg');

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
        willChange: 'transform',
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
        background: `url(${HOME_BACKGROUND_IMG}) no-repeat -10rem center`,
        backgroundSize: 'auto 100%',
        height: '100vh',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            backgroundPositionX: '-5rem',
        },
        [theme.breakpoints.up('md')]: {
            backgroundPositionX: '0',
        },
        '&:before, &:after': {
            animation: `fade-in ${theme.transitions.duration.layout * 4}ms ${theme.transitions.duration.layout * 2}ms forwards`,
            background: `linear-gradient(135deg, transparent, ${theme.palette.primary.dark})`,
            bottom: 0,
            content: '""',
            display: 'block',
            left: 0,
            opacity: 0.25,
            pointerEvents: 'none',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1,
        },
        '&:after': {
            animation: `fade-in ${theme.transitions.duration.layout * 6}ms ${theme.transitions.duration.layout * 2}ms forwards`,
            background: `linear-gradient(120deg, transparent 0%, transparent 55%, ${theme.palette.primary.main} 110%, ${theme.palette.primary.main} 100%);`,
            left: '50vw',
            opacity: 0,
            zIndex: 1,
        },
    },
    mainContentWrapper: {
        position: 'relative',
        zIndex: 2,
        '&:before': {
            animation: `fade-in ${theme.transitions.duration.layout * 4}ms ${theme.transitions.duration.layout * 2}ms forwards`,
            background: `linear-gradient(35deg, transparent 0%, transparent 60%, ${theme.palette.secondary.dark} 160%, ${theme.palette.secondary.dark} 100%);`,
            content: '""',
            height: '100vh',
            display: 'block',
            left: 0,
            opacity: 0.25,
            pointerEvents: 'none',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 0,
        },
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
                                <div className={classes.mainContentWrapper}>
                                    {main}
                                </div>
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
