import classNames from 'classnames';
import {Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import React from 'react';
import {NavLink} from 'react-router-dom';

import {Logo} from '.';
import {
    LOCATION_BACKGROUND,
    LOCATION_MY_WORK,
    LOCATION_WHAT_I_DO,
} from '../location';
import {fontSmooth} from '../style-utils';

const useStyles = makeStyles(theme => ({
    root: {
        bottom: 0,
        left: 0,
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
    liBottom: {
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
    },
    liLeft: {
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    liRight: {
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    navLink: {
        color: theme.palette.common.white,
        extend: fontSmooth,
        display: 'inline-block',
        fontSize: '1em',
        fontWeight: theme.typography.fontWeightMedium,
        paddingTop: '1.35em',
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
    navLinkBottom: {
        paddingBottom: '1.35em',
        paddingTop: 0,
    },
    navLinkLeft: {
        transform: 'rotate(-90deg) translateY(-70%)',
    },
    navLinkRight: {
        transform: 'rotate(90deg) translateY(-30%)',
    },
    iconNavLink: {
        left: '50%',
        position: 'absolute',
        top: 0,
        transform: 'translateX(-50%)',
    },
    iconNavLinkBottom: {
        top: 'auto',
        bottom: 0,
    },
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <ul className={classes.ul}>
                <li>
                    <NavLink
                        className={classNames(
                            classes.navLink,
                            classes.navLinkTop,
                        )}
                        exact
                        to="/"
                    >
                        <Logo />
                    </NavLink>
                </li>
                <li
                    className={classNames(
                        classes.li,
                        classes.liRight,
                    )}
                >
                    <NavLink
                        className={classNames(
                            classes.navLink,
                            classes.navLinkRight,
                        )}
                        exact
                        to={`/${LOCATION_MY_WORK}`}
                    >
                        <Icon className={classes.iconNavLink}>
                            keyboard_arrow_up
                        </Icon>
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
                        className={classNames(
                            classes.navLink,
                            classes.navLinkLeft,
                        )}
                        exact
                        to={`/${LOCATION_BACKGROUND}`}
                    >
                        <Icon className={classes.iconNavLink}>
                            keyboard_arrow_up
                        </Icon>
                        Background
                    </NavLink>
                </li>
                <li
                    className={classNames(
                        classes.li,
                        classes.liBottom,
                    )}
                >
                    <NavLink
                        className={classNames(
                            classes.navLink,
                            classes.navLinkBottom,
                        )}
                        exact
                        to={`/${LOCATION_WHAT_I_DO}`}
                    >
                        What I Do
                        <Icon
                            className={classNames(
                                classes.iconNavLink,
                                classes.iconNavLinkBottom,
                            )}
                        >
                            keyboard_arrow_down
                        </Icon>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
