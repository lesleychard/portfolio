import {
    Grid,
    Typography,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';

import {
    Logo,
    SocialLinks,
    Tagline,
} from '.';
import {
    LOCATION_BACKGROUND,
    LOCATION_MY_WORK,
    LOCATION_WHAT_I_DO,
} from '../location';
import {
    container,
    fontSmooth,
    stripUl,
} from '../style-utils';

const CONTACT_LINKS = [
    {
        href: 'mailto:me@lesleychard.com',
        text: 'me@lesleychard.com',
    },
    {
        href: 'tel:7096939899',
        text: '+1.709.693.9899',
    },
];

const SITE_LINKS = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: `/${LOCATION_WHAT_I_DO}`,
        text: 'What I Do',
    },
    {
        href: `/${LOCATION_MY_WORK}`,
        text: 'My Work',
    },
    {
        href: `/${LOCATION_BACKGROUND}`,
        text: 'Background',
    },
];

const styles = (theme) => {
    const gridSpacingDefault = '1rem';
    const gridSpacingSm = '2rem';
    return {
        root: {
            background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
            color: theme.palette.primary.contrastText,
            extend: fontSmooth,
            '& a': {
                color: theme.palette.primary.contrastText,
                textDecoration: 'none',
                transition: `color ${theme.transitions.duration.shortest}ms`,
                '&:hover': {
                    color: theme.palette.secondary.main,
                },
            },
        },
        container: {
            extend: container(theme),
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            [theme.breakpoints.up('md')]: {
                alignItems: 'flex-end',
            },
        },
        logoContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            marginBottom: '2rem',
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row',
                marginBottom: '6rem',
            },
        },
        logo: {
            marginRight: '1rem',
            [theme.breakpoints.up('md')]: {
                marginRight: '2rem',
            },
            [theme.breakpoints.down('xs')]: {
                backgroundPositionX: 'left',
                marginRight: 0,
                width: '100%',
            },
        },
        gridContainer: {
            display: 'inline-flex',
            margin: `0 -${gridSpacingDefault}`,
            position: 'relative',
            width: 'auto',
            '&:before': {
                background: theme.palette.common.white,
                content: '""',
                display: 'block',
                height: 1,
                left: '1rem',
                position: 'absolute',
                top: '-1rem',
                right: '-0.5rem',
            },
            [theme.breakpoints.up('sm')]: {
                margin: `0 -${gridSpacingSm}`,
                '&:before': {
                    height: 3,
                    left: gridSpacingSm,
                    right: '-15vw',
                    top: '-3rem',
                },
            },
        },
        gridItem: {
            padding: `0 ${gridSpacingDefault}`,
            [theme.breakpoints.up('sm')]: {
                padding: `0 ${gridSpacingSm}`,
            },
        },
        typographyH3: {
            fontSize: '1.2em',
            marginBottom: '0.9rem',
        },
        ul: {
            extend: stripUl,
        },
        li: {
            margin: '0.5em 0',
        },
        socialLinks: {
            marginLeft: '-1em',
            position: 'relative',
        },
    };
};

class Footer extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.logoContainer}>
                        <Logo className={classes.logo} />
                        <Tagline />
                    </div>
                    <Grid
                        className={classes.gridContainer}
                        container
                    >
                        <Grid
                            className={classes.gridItem}
                            item
                        >
                            <Typography
                                className={classes.typographyH3}
                                color="inherit"
                                component="h3"
                                variant="h6"
                            >
                                Contact
                            </Typography>
                            <ul className={classes.ul}>
                                {
                                    CONTACT_LINKS.map(({href, text}) => (
                                        <li className={classes.li}>
                                            <a href={href}>
                                                {text}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <SocialLinks
                                className={classes.socialLinks}
                                direction="horizontal"
                            />
                        </Grid>
                        <Grid
                            className={classes.gridItem}
                            item
                        >
                            <Typography
                                className={classes.typographyH3}
                                color="inherit"
                                component="h3"
                                variant="h6"
                            >
                                Links
                            </Typography>
                            <ul className={classes.ul}>
                                {
                                    SITE_LINKS.map(({href, text}) => (
                                        <li className={classes.li}>
                                            <NavLink to={href}>
                                                {text}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {index: 1})(Footer);
