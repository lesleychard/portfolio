import {
    ButtonBase,
    Icon,
    Grid,
    withStyles,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {LOCATION_MY_WORK} from '../location';

const styles = theme => ({
    root: {},
    gridItemMedia: {
        backgroundSize: 'cover',
        cursor: 'pointer',
        flex: '0 0 30vw',
        height: '18rem',
        transition: `transform ${theme.transitions.duration.short}ms`,
        transform: 'scale(1)',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    gridItemCopy: {
        paddingLeft: '2rem',
    },
    ulTags: {
        display: 'flex',
        listStyle: 'none',
        margin: `2rem -${theme.spacing.unit}px 1rem`,
        padding: 0,
    },
    liTags: {
        color: theme.palette.primary.light,
        fontSize: '0.8em',
        fontWeight: theme.typography.fontWeightMedium,
        padding: `0 ${theme.spacing.unit}px`,
        textTransform: 'uppercase',
    },
    typographyH2: {
        marginBottom: '1rem',
    },
    buttonView: {
        fontSize: 0,
        justifyContent: 'flex-end',
        marginTop: '1rem',
        maxWidth: '2.5rem',
        position: 'relative',
        transition: `max-width ${theme.transitions.duration.short}ms`,
        width: '100%',
        '&:before': {
            background: theme.palette.secondary.main,
            content: '""',
            height: 3,
            left: 0,
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
        },
        '&:hover, $gridItemMedia:hover + $gridItemCopy &': {
            maxWidth: '3.5rem',
        },
    },
    iconButtonView: {
        color: theme.palette.secondary.main,
        fontSize: '2.25rem',
        marginRight: '-1rem',
        position: 'relative',
    },
});

class PortfolioCard extends PureComponent {
    static defaultProps = {
        description: null,
        media: null,
        tags: [],
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        description: PropTypes.string,
        media: PropTypes.string,
        slug: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
    };

    openLink = () => {
        const {slug} = this.props;
        window.location = `${LOCATION_MY_WORK}/${slug}`;
    };

    render() {
        const {
            classes,
            description,
            media,
            tags,
            title,
        } = this.props;
        return (
            <Grid
                alignItems="center"
                className={classes.root}
                container
                wrap="nowrap"
            >
                <Grid
                    className={classes.gridItemMedia}
                    item
                    onClick={this.openLink}
                    style={{
                        backgroundImage: `url(${media})`,
                    }}
                    role="link"
                />
                <Grid
                    className={classes.gridItemCopy}
                    item
                >
                    <ul className={classes.ulTags}>
                        {
                            tags.map(tag => (
                                <li className={classes.liTags}>
                                    {tag}
                                </li>
                            ))
                        }
                    </ul>
                    <Typography
                        className={classes.typographyH2}
                        variant="h2"
                    >
                        {title}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                    <ButtonBase

                        className={classes.buttonView}
                    >
                        View
                        {' '}
                        {title}
                        <Icon className={classes.iconButtonView}>
                            keyboard_arrow_right
                        </Icon>
                    </ButtonBase>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PortfolioCard);
