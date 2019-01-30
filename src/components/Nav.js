import classNames from 'classnames';
import {Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import React from 'react';
import {NavLink} from 'react-router-dom';

import {Logo} from '.';
import {fontSmooth} from '../style-utils';

const useStyles = makeStyles(theme => ({
    root: {
        bottom: 0,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
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
    navLinkRight: {
        transform: 'rotate(90deg) translateY(-30%)',
    },
    iconNavLink: {
        left: '50%',
        position: 'absolute',
        top: 0,
        transform: 'translateX(-50%)',
    },
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <ul className={classes.ul}>
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
                        to="/my-work"
                    >
                        <Icon className={classes.iconNavLink}>
                            keyboard_arrow_up
                        </Icon>
                        My Work
                    </NavLink>
                </li>
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
            </ul>
        </nav>
    );
}
