import axios from 'axios';
import classNames from 'classnames';
import {
    ButtonBase,
    CircularProgress,
    Icon,
    Grid,
    withStyles,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {LOCATION_MY_WORK} from '../location';

import tagData from '../../data/tags.yaml';

const styles = theme => ({
    root: {
        cursor: 'pointer',
        margin: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-start',
            flexDirection: 'column',
        },
    },
    gridItemMedia: {
        backgroundSize: 'cover',
        cursor: 'pointer',
        flex: '0 0 10rem',
        transition: `transform ${theme.transitions.duration.short}ms`,
        transform: 'scale(1)',
        width: '100%',
        '$root:hover &': {
            transform: 'scale(1.05)',
        },
        [theme.breakpoints.up('md')]: {
            flex: `0 0 ${theme.layout.myWorkMediaWidth}`,
            height: '18rem',
            width: 'auto',
        },
    },
    gridItemCopy: {
        transition: `transform ${theme.transitions.duration.short}ms`,
        transform: 'translateX(0)',
        '$root:hover &': {
            transform: 'translateX(0.5rem)',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '2rem',
            '$root:hover &': {
                transform: 'translateX(1rem)',
            },
        },
    },
    circularProgressTags: {
        marginBottom: theme.spacing.unit,
    },
    ulTags: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        margin: `1rem -${theme.spacing.unit}px 0.5rem`,
        padding: 0,
        [theme.breakpoints.up('sm')]: {
            margin: `2rem -${theme.spacing.unit}px 1rem`,
        },
    },
    liTags: {
        color: theme.palette.primary.light,
        fontSize: '0.75em',
        fontWeight: theme.typography.fontWeightMedium,
        lineHeight: 1.5,
        padding: `0 ${theme.spacing.unit}px`,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
    },
    typographyH2: {
        fontSize: '1rem',
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: '0.5rem',
        wordBreak: 'break-all',
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h2.fontSize,
            marginBottom: '1rem',
            wordBreak: 'normal',
        },
    },
    buttonView: {
        fontSize: 0,
        justifyContent: 'flex-end',
        marginTop: '1rem',
        maxWidth: '2rem',
        position: 'relative',
        transition: `max-width ${theme.transitions.duration.short}ms`,
        width: '100%',
        '&:before': {
            background: theme.palette.secondary.main,
            content: '""',
            height: 2,
            left: 0,
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
        },
        '$root:hover &': {
            maxWidth: '3.5rem',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '2.5rem',
            '&:before': {
                height: 3,
            },
        },
    },
    iconButtonView: {
        color: theme.palette.secondary.main,
        fontSize: '1.5rem',
        marginRight: '-0.75rem',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.25rem',
            marginRight: '-1rem',
        },
    },
});

class PortfolioCard extends PureComponent {
    static defaultProps = {
        className: null,
        description: null,
        media: null,
        tags: [],
    };

    static propTypes = {
        className: PropTypes.string,
        classes: PropTypes.object.isRequired,
        description: PropTypes.string,
        media: PropTypes.string,
        slug: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.number),
        title: PropTypes.string.isRequired,
    };

    state = {
        tagsLoading: true,
        tagNames: [],
    };

    componentDidMount() {
        axios.get(tagData)
            .then((resPortfolio) => {
                const {tags} = resPortfolio.data;
                this.setState({
                    tagsLoading: false,
                    tagNames: tags,
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({tagsLoading: false});
            });
    }

    openLink = () => {
        const {slug} = this.props;
        window.location = `${LOCATION_MY_WORK}/${slug}`;
    };

    render() {
        const {
            className: classNameProp,
            classes,
            description,
            media,
            tags,
            title,
            ...other
        } = this.props;
        const {
            tagsLoading,
            tagNames,
        } = this.state;
        return (
            <Grid
                alignItems="center"
                className={classNames(
                    classes.root,
                    classNameProp,
                )}
                container
                onClick={this.openLink}
                role="link"
                wrap="nowrap"
                {...other}
            >
                <Grid
                    className={classes.gridItemMedia}
                    item
                    style={{
                        backgroundImage: `url(${media})`,
                    }}
                />
                <Grid
                    className={classes.gridItemCopy}
                    item
                >
                    {
                        tagsLoading
                            ? (
                                <CircularProgress
                                    className={classes.circularProgressTags}
                                    size={16}
                                />
                            )
                            : (
                                <ul className={classes.ulTags}>
                                    {
                                        tags.map(tag => (
                                            <li
                                                key={tag}
                                                className={classes.liTags}
                                            >
                                                {tagNames[tag]}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                    }
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
