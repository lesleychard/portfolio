import axios from 'axios';
import {
    CircularProgress,
    Icon,
    Typography,
} from '@material-ui/core';
import {withStyles, withTheme} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {
    Footer,
    PortfolioCard,
} from '../components';
import {container} from '../style-utils';

import portfolioData from '../../data/portfolio.yaml';

const styles = theme => ({
    '@keyframes my-work-typography-h1-before-in': {
        from: {
            width: '0%',
        },
        to: {
            width: '100%',
        },
    },
    root: {},
    container: {
        extend: container(theme),
        minHeight: '100vh',
    },
    typographyH1: {
        animation: `fade-drop-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
        fontSize: '1.4em',
        marginBottom: '1rem',
        opacity: 0,
        paddingBottom: '1rem',
        position: 'relative',
        '&:before': {
            animation: `$my-work-typography-h1-before-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
            content: '""',
            background: theme.palette.common.black,
            bottom: 0,
            height: 1,
            left: 0,
            position: 'absolute',
            width: 0,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h1.fontSize,
            marginBottom: '3rem',
            paddingBottom: '3rem',
            '&:before': {
                height: 3,
            },
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
            width: theme.layout.myWorkMediaWidth,
        },
    },
    contentContainer: {
        animation: `fade-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
        margin: '2rem 1.5rem 0 0',
        opacity: 0,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            margin: 0,
        },
        [theme.breakpoints.up('md')]: {
            width: theme.layout.myWorkMediaWidth,
        },
    },
    typographyLoading: {
        fontStyle: 'italic',
        marginTop: '1rem',
    },
    portfolioCardContainer: {
        marginRight: '1.5rem',
        [theme.breakpoints.up('sm')]: {
            marginRight: 0,
        },
    },
    portfolioCard: {
        animation: `fade-glide-right-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
        opacity: 0,
    },
    iconError: {
        color: theme.palette.error.main,
        fontSize: '3rem',
        marginBottom: '1rem',
    },
});

class MyWork extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    state = {
        error: false,
        loading: true,
        portfolio: [],
    };

    componentDidMount() {
        axios.get(portfolioData)
            .then((resPortfolio) => {
                const {portfolio} = resPortfolio.data;
                this.setState({
                    loading: false,
                    portfolio,
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    error: true,
                    loading: false,
                });
            });
    }

    animationDelay = (cardIndex) => {
        const {theme} = this.props;
        const duration = theme.transitions.duration.copy;
        return `${(duration / 1.5) + (duration * ((cardIndex + 1) / 2))}ms`;
    }

    render() {
        const {classes} = this.props;
        const {
            error,
            loading,
            portfolio,
        } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <Typography
                        className={classes.typographyH1}
                        variant="h1"
                    >
                        My Work
                    </Typography>
                    {
                        loading
                            ? (
                                <div className={classes.contentContainer}>
                                    <CircularProgress color="secondary" />
                                    <Typography
                                        className={classes.typographyLoading}
                                        variant="caption"
                                    >
                                        I&rsquo;ve got a lot of work to show you. Hang tight.
                                    </Typography>
                                </div>
                            )
                            : (
                                <div className={classes.portfolioCardContainer}>
                                    {
                                        portfolio.map(
                                            (
                                                {
                                                    title,
                                                    slug,
                                                    description,
                                                    tags,
                                                },
                                                index,
                                            ) => (
                                                <PortfolioCard
                                                    className={classes.portfolioCard}
                                                    description={description}
                                                    key={slug}
                                                    media={`img/portfolio/${slug}/thumbnail.png`}
                                                    slug={slug}
                                                    style={{
                                                        animationDelay: this.animationDelay(index),
                                                    }}
                                                    tags={tags}
                                                    title={title}
                                                />
                                            ),
                                        )
                                    }
                                </div>
                            )
                    }
                    {
                        error
                            ? (
                                <div className={classes.contentContainer}>
                                    <Icon className={classes.iconError}>
                                        thumb_down
                                    </Icon>
                                    <Typography
                                        gutterBottom
                                        variant="h2"
                                    >
                                        Well, this is awkward.
                                    </Typography>
                                    <Typography>
                                        Something went wrong trying to fetch all that work.
                                        Have you tried turning it off and on again?
                                    </Typography>
                                </div>
                            )
                            : null
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(withTheme()(MyWork));
