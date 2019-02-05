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
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 100%)',
        transition: `transform ${theme.transitions.duration.standard}ms`,
        willChange: 'transform',
        '&$liVisible': {
            transform: 'translate(-50%, 0)',
        },
    },
    liLeft: {
        left: 0,
        top: '30%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.up('sm')]: {
            top: '45%',
        },
    },
    liRight: {
        right: 0,
        top: '30%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.up('sm')]: {
            top: '45%',
        },
    },
    liTop: {
        transform: 'translateY(-100%)',
        transition: `transform ${theme.transitions.duration.standard}ms`,
        '&$liVisible': {
            transform: 'translateY(0)',
        },
    },
    routerNavLink: {
        pointerEvents: 'all',
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
                            <Logo />
                        </RouterNavLink>
                    </li>
                    <li
                        className={classNames(
                            classes.li,
                            classes.liRight,
                            {
                                [classes.liHome]: location.pathname === '/',
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
                            {
                                [classes.liHome]: location.pathname === '/',
                            },
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
                            direction="bottom"
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
