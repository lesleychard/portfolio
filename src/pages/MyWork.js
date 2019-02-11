import axios from 'axios';
import {
    CircularProgress,
    Typography,
} from '@material-ui/core';
import {withStyles, withTheme} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {PortfolioCard} from '../components';

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
    root: {
        margin: '6rem 0 5rem 1.5rem',
        [theme.breakpoints.up('sm')]: {
            margin: '10vh 15vw 4rem',
        },
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
            textAlign: 'right',
            width: '30vw',
            '&:before': {
                height: 3,
            },
        },
    },
    loadingContainer: {
        animation: `fade-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
        opacity: 0,
        textAlign: 'center',
        width: '30vw',
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
});

class MyWork extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    state = {
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
            loading,
            portfolio,
        } = this.state;
        return (
            <div className={classes.root}>
                <Typography
                    className={classes.typographyH1}
                    variant="h1"
                >
                    My Work
                </Typography>
                {
                    loading
                        ? (
                            <div className={classes.loadingContainer}>
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
            </div>
        );
    }
}

export default withStyles(styles)(withTheme()(MyWork));
