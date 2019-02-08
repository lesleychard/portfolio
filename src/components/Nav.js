import classNames from 'classnames';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';

import {
    Logo,
    NavLink,
} from '.';
import {
    LOCATION_BACKGROUND,
    LOCATION_MY_WORK,
    LOCATION_WHAT_I_DO,
} from '../location';

const styles = theme => ({
    root: {
        bottom: 0,
        left: 0,
        pointerEvents: 'none',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    li: {
        display: 'inline-block',
        position: 'absolute',
    },
    liVisible: {},
    liBottom: {
        bottom: '1.5rem',
        left: 0,
        transform: 'translate(100%, 200%)',
        transition: `transform ${theme.transitions.duration.standard}ms`,
        willChange: 'transform',
        '&$liVisible': {
            transform: 'translate(0, 0)',
        },
        [theme.breakpoints.up('sm')]: {
            left: '3vw',
        },
    },
    liLeft: {
        left: 0,
        top: '30%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.up('sm')]: {
            left: '-1.5rem',
            top: '45%',
        },
    },
    liRight: {
        right: 0,
        top: '30%',
        transform: 'translate(100%, -50%)',
        transition: `transform ${theme.transitions.duration.standard}ms`,
        willChange: 'transform',
        [theme.breakpoints.up('sm')]: {
            right: '-1.5rem',
            top: '45%',
        },
        '&$liVisible': {
            transform: 'translate(0, -50%)',
        },
    },
    liTop: {
        left: '1rem',
        top: '2rem',
        transform: 'translateY(-200%)',
        transition: `transform ${theme.transitions.duration.standard}ms`,
        '&$liVisible': {
            transform: 'translateY(0)',
        },
    },
    routerNavLink: {
        pointerEvents: 'all',
    },
    logo: {
        [theme.breakpoints.up('lg')]: {
            width: 220,
            height: 35,
        },
    },
});

class Nav extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
    };

    render() {
        const {
            classes,
            location,
        } = this.props;

        let bottomDirection = 'bottom';
        if (location.pathname === `/${LOCATION_BACKGROUND}`) {
            bottomDirection = 'bottom-right';
        }
        if (location.pathname === `/${LOCATION_MY_WORK}`) {
            bottomDirection = 'bottom-left';
        }

        return (
            <nav className={classes.root}>
                <ul className={classes.ul}>
                    <li
                        className={classNames(
                            classes.li,
                            classes.liTop,
                            {
                                [classes.liVisible]: location.pathname !== '/',
                            },
                        )}
                    >
                        <RouterNavLink
                            className={classes.routerNavLink}
                            exact
                            to="/"
                        >
                            <Logo
                                className={classes.logo}
                                size="small"
                            />
                        </RouterNavLink>
                    </li>
                    <li
                        className={classNames(
                            classes.li,
                            classes.liRight,
                            {
                                [classes.liVisible]: location.pathname !== `/${LOCATION_MY_WORK}`,
                            },
                        )}
                    >
                        <NavLink
                            exact
                            to={`/${LOCATION_MY_WORK}`}
                        >
                            My Work
                        </NavLink>
                    </li>
                    <li
                        className={classNames(
                            classes.li,
                            classes.liLeft,
                        )}
                    >
                        <NavLink
                            direction="left"
                            exact
                            to={`/${LOCATION_BACKGROUND}`}
                        >
                            Background
                        </NavLink>
                    </li>
                    <li
                        className={classNames(
                            classes.li,
                            classes.liBottom,
                            {
                                [classes.liVisible]: (
                                    location.pathname !== '/'
                                    && location.pathname !== `/${LOCATION_WHAT_I_DO}`
                                ),
                            },
                        )}
                    >
                        <NavLink
                            direction={bottomDirection}
                            exact
                            to={`/${LOCATION_WHAT_I_DO}`}
                        >
                            What I Do
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withStyles(styles)(Nav);
