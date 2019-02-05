import classNames from 'classnames';
import {
    IconButton,
    Tooltip,
    withStyles,
    Fade,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {fade, fontSmooth} from '../style-utils';

const GITHUB_IMG = require('../assets/svg/social/github.svg');
const INSTAGRAM_IMG = require('../assets/svg/social/instagram.svg');
const LINKEDIN_IMG = require('../assets/svg/social/linkedin.svg');

const DIRECTION_HORIZONTAL = 'horizontal';
const DIRECTION_VERTICAL = 'vertical';

const SOCIAL_LINKS = [
    {
        alt: 'Visit Linkedin Profile',
        icon: LINKEDIN_IMG,
        tooltip: '/in/lesleychard',
        url: 'https://www.linkedin.com/in/lesleychard/',
    },
    {
        alt: 'Visit GitHub Profile',
        icon: GITHUB_IMG,
        tooltip: '@lesleychard',
        url: 'https://github.com/lesleychard',
    },
    {
        alt: 'Visit Instagram Profile',
        icon: INSTAGRAM_IMG,
        tooltip: '@lipscripts',
        url: 'https://www.instagram.com/lipscripts/',
    },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        padding: 9,
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
        },
    },
    vertical: {
        flexDirection: 'row',
    },
    li: {
        margin: '0.1em',
    },
    iconButton: {
        padding: theme.spacing.unit,
        transition: `background ${theme.transitions.duration.short}ms, transform ${theme.transitions.duration.short}ms`,
        willChange: 'transform',
        '&:hover': {
            background: fade(theme.palette.secondary.main, 0.5),
            transform: 'scale(1.15)',
        },
    },
    tooltip: {
        background: fade(theme.palette.common.black, 0.33),
        borderRadius: 0,
        extend: fontSmooth,
        fontSize: '0.8rem',
        fontWeight: theme.typography.fontWeightMedium,
        lineHeight: 1.2,
        margin: '0 0.8em',
        padding: '0.6em 1em',
    },
    imgIcon: {
        height: '1.25rem',
    },
});

class SocialLinks extends PureComponent {
    static defaultProps = {
        direction: DIRECTION_HORIZONTAL,
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        direction: PropTypes.oneOf([
            DIRECTION_HORIZONTAL,
            DIRECTION_VERTICAL,
        ]),
    };

    render() {
        const {
            classes,
            direction,
        } = this.props;
        return (
            <ul
                className={classNames(
                    classes.root,
                    {
                        [classes.vertical]: direction === DIRECTION_VERTICAL,
                    },
                )}
            >
                {
                    SOCIAL_LINKS.map(({
                        alt, icon, tooltip, url,
                    }) => (
                        <li className={classes.li}>
                            <Tooltip
                                classes={{
                                    tooltip: classes.tooltip,
                                }}
                                placement={direction === DIRECTION_VERTICAL ? 'bottom' : 'left'}
                                title={tooltip}
                                TransitionComponent={Fade}
                                // open
                            >
                                <IconButton
                                    className={classes.iconButton}
                                    component="a"
                                    href={url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        alt={alt}
                                        className={classes.imgIcon}
                                        src={icon}
                                    />
                                </IconButton>
                            </Tooltip>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default withStyles(styles)(SocialLinks);
