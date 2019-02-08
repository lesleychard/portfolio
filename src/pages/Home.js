import classNames from 'classnames';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {
    NavLink,
    Logo,
    SocialLinks,
} from '../components';
import {LOCATION_WHAT_I_DO} from '../location';
import {fontSmooth} from '../style-utils';


const styles = (theme) => {
    const gridContainerBottomOffset = '20vh';

    const copyWidth = '80vw';
    const copyWidthSm = '20rem';

    const copyGutter = '2rem';
    const copyGutterMd = '4rem';

    return {
        '@keyframes home-root-before-in': {
            from: {
                transform: 'translateX(100%)',
            },
            to: {
                transform: 'translateX(0)',
            },
        },
        root: {
            alignItems: 'flex-end',
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            '&:before': {
                animation: `$home-root-before-in ${theme.transitions.duration.copy * 2}ms ${theme.transitions.duration.copy * 1.5}ms forwards`,
                background: theme.palette.common.white,
                content: '""',
                display: 'none',
                height: 3,
                left: '50%',
                position: 'absolute',
                right: 0,
                top: 'calc(60vh - 14rem)',
                transform: 'translateX(100%)',
            },
            [theme.breakpoints.up('md')]: {
                alignItems: 'center',
            },
            [theme.breakpoints.up('lg')]: {
                alignItems: 'flex-end',
                '&:before': {
                    display: 'block',
                },
            },
        },
        gridContainer: {
            alignItems: 'flex-end',
            flexDirection: 'column',
            flexWrap: 'wrap',
            marginBottom: copyGutter,
            maxWidth: '50rem',
            [theme.breakpoints.up('sm')]: {
                alignItems: 'center',
                marginBottom: gridContainerBottomOffset,
            },
            [theme.breakpoints.up('md')]: {
                alignItems: 'flex-start',
                flexDirection: 'row',
                flexWrap: 'no-wrap',
                marginBottom: 0,
                width: '75%',
            },
            [theme.breakpoints.up('lg')]: {
                marginBottom: gridContainerBottomOffset,
            },
        },
        gridItem: {
            flex: '0 0 50%',
            [theme.breakpoints.up('md')]: {
                paddingTop: copyGutter,
            },
        },
        gridItemLogo: {
            [theme.breakpoints.up('md')]: {
                paddingRight: copyGutter,
            },
        },
        logo: {
            animation: `fade-glide-right-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
            height: 75,
            opacity: 0,
            width: copyWidth,
            [theme.breakpoints.up('sm')]: {
                width: copyWidthSm,
            },
            [theme.breakpoints.up('md')]: {
                height: 52,
                width: '100%',
            },
        },
        gridItemCopy: {
            width: copyWidth,
            paddingRight: '1.5em',
            [theme.breakpoints.up('sm')]: {
                paddingRight: 0,
                width: copyWidthSm,
            },
            [theme.breakpoints.up('md')]: {
                width: 'auto',
            },
        },
        typography: {
            color: theme.palette.common.white,
            extend: fontSmooth,
            fontSize: '1em',
            '&> strong': {
                display: 'inline-block',
                position: 'relative',
                fontWeight: theme.typography.fontWeightRegular,
                '&:before': {
                    background: theme.palette.common.black,
                    bottom: '0.3em',
                    content: '""',
                    display: 'block',
                    left: 0,
                    position: 'absolute',
                    right: 0,
                    top: '0.45em',
                    zIndex: -1,
                },
            },
        },
        typographySub: {
            animation: `fade-drop-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy * 1.5}ms forwards`,
            fontSize: '1.3em',
            lineHeight: 1.1,
            marginBottom: copyGutter,
            opacity: 0,
            [theme.breakpoints.up('md')]: {
                marginBottom: copyGutterMd,
            },
            '&> em': {
                display: 'block',
            },
        },
        typographyDescription: {
            animation: `fade-drop-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy * 1.7}ms forwards`,
            opacity: 0,
        },
        navLinkContainer: {
            marginTop: copyGutter,
            willChange: 'opacity',
            [theme.breakpoints.up('md')]: {
                animation: `fade-drop-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy * 1.9}ms forwards`,
                marginTop: copyGutterMd,
                opacity: 0,
            },
        },
        gridItemSocialLinks: {
            alignSelf: 'flex-start',
            left: '20vw',
            marginLeft: -theme.spacing.unit,
            position: 'relative',
            order: -1,
            zIndex: 1,
            [theme.breakpoints.up('sm')]: {
                left: 'auto',
                marginLeft: 0,
                position: 'absolute',
                top: '1rem',
                right: '1rem',
            },
        },
    };
};

class Home extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    className={classes.gridContainer}
                    container
                >
                    <Grid
                        className={classNames(
                            classes.gridItem,
                            classes.gridItemLogo,
                        )}
                        item
                    >
                        <Logo
                            className={classes.logo}
                            size="large"
                        />
                    </Grid>
                    <Grid
                        className={classNames(
                            classes.gridItem,
                            classes.gridItemCopy,
                        )}
                        item
                    >
                        <Typography
                            className={classNames(
                                classes.typography,
                                classes.typographySub,
                            )}
                            gutterBottom
                            variant="h6"
                        >
                            <em>Award winning</em>
                            {' '}
                            interaction developer
                        </Typography>
                        <Typography
                            className={classNames(
                                classes.typography,
                                classes.typographyDescription,
                            )}
                        >
                            <strong>+10 years</strong>
                            {' '}
                            of dabbling in code and design. Back when I started, Neopets were still a thing &mdash; remember them?
                            I digress. My name is Lesley Chard, and I&rsquo;m an award winning interactive developer based out of St. John&rsquo;s, NL.
                        </Typography>
                        <div className={classes.navLinkContainer}>
                            <NavLink
                                direction="bottom"
                                exact
                                to={`/${LOCATION_WHAT_I_DO}`}
                            >
                                What I Do
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid
                        className={classes.gridItemSocialLinks}
                        item
                    >
                        <SocialLinks />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
