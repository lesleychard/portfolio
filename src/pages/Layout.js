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

const styles = (theme) => {
    const rightWidthVw = 80;
    const rightWidthVwSm = 85;
    const rightWidthVwLg = 87;

    return {
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
            '& > $right': {
                flex: `0 0 ${rightWidthVw}vw`,
            },
            [theme.breakpoints.up('sm')]: {
                '& > $right': {
                    flex: `0 0 ${rightWidthVwSm}vw`,
                },
            },
            [theme.breakpoints.up('lg')]: {
                '& > $right': {
                    flex: `0 0 ${rightWidthVwLg}vw`,
                },
            },
        },
        containerActiveCenter: {
            transform: 'translate(-100vw, 0)',
        },
        containerActiveLeft: {
            transform: 'translate(0, 0)',
        },
        containerActiveRight: {
            transform: `translate(-${rightWidthVw + 100}vw, 0)`,
            [theme.breakpoints.up('sm')]: {
                transform: `translate(-${rightWidthVwSm + 100}vw, 0)`,
            },
            [theme.breakpoints.up('lg')]: {
                transform: `translate(-${rightWidthVwLg + 100}vw, 0)`,
            },
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
            height: '100vh',
            position: 'relative',
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
            '&:before': {
                transition: `transform ${theme.transitions.duration.layout}ms`,
            },
            '&:after': {
                animation: `fade-in ${theme.transitions.duration.layout * 6}ms ${theme.transitions.duration.layout * 2}ms forwards`,
                background: `linear-gradient(120deg, transparent 0%, transparent 55%, ${theme.palette.primary.main} 110%, ${theme.palette.primary.main} 100%);`,
                left: '50vw',
                opacity: 0,
            },
            '$containerActiveRight &': {
                '&:before': {
                    transform: 'translateX(20vw)',
                },
            },
        },
        mainBg: {
            background: `url(${HOME_BACKGROUND_IMG}) no-repeat -10rem center`,
            backgroundSize: 'auto 100%',
            position: 'absolute',
            height: '100vh',
            left: 0,
            top: 0,
            transform: 'translateX(0)',
            transition: `transform ${theme.transitions.duration.layout}ms`,
            width: '100vw',
            zIndex: 0,
            '$containerActiveRight &': {
                transform: 'translateX(60vw)',
            },
            [theme.breakpoints.up('sm')]: {
                backgroundPositionX: '-5rem',
            },
            [theme.breakpoints.up('md')]: {
                backgroundPositionX: '0',
            },
            [theme.breakpoints.up('lg')]: {
                '$containerActiveRight &': {
                    transform: 'translateX(68vw)',
                },
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
                transition: `transform ${theme.transitions.duration.layout}ms`,
                zIndex: 0,
            },
            '$containerActiveRight &': {
                '&:before': {
                    transform: 'translateX(100vw)',
                },
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
            boxShadow: theme.shadows[12],
            position: 'relative',
            zIndex: 1,
        },
        scrollWrapper: {
            width: '100%',
            maxHeight: '100vh',
            overflow: 'auto',
        },
    };
};

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
        const rightActive = location.pathname.substring(0, 8) === `/${LOCATION_MY_WORK}`;
        return (
            <div className={classes.root}>
                <div
                    className={classNames(
                        classes.container,
                        {
                            [classes.containerActiveCenter]: centerActive,
                            [classes.containerActiveLeft]: location.pathname === `/${LOCATION_BACKGROUND}`,
                            [classes.containerActiveRight]: rightActive,
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
                                <div className={classes.mainBg} />
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
