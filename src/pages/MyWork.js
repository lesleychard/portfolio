import {
    // Grid,
    Typography,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import React from 'react';

// import {PortfolioCard} from '../components';

/**
 * @todo
 * use yaml-loader to dynamically fetch files from data directory using redux
 */

// const ICEBERG_FINDER_MEDIA = require('../assets/img/portfolio/iceberg-finder/thumbnail.png');

const useStyles = makeStyles(theme => ({
    '@keyframes my-work-typography-h1-before-in': {
        from: {
            width: '0%',
        },
        to: {
            width: '100%',
        },
    },
    root: {
        margin: '10vh 15vw 4rem',
    },
    typographyH1: {
        animation: `fade-drop-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
        paddingBottom: '3rem',
        marginBottom: '3rem',
        opacity: 0,
        position: 'relative',
        textAlign: 'right',
        width: '30vw',
        '&:before': {
            animation: `$my-work-typography-h1-before-in ${theme.transitions.duration.copy}ms ${theme.transitions.duration.copy}ms forwards`,
            content: '""',
            background: theme.palette.common.black,
            bottom: 0,
            height: 3,
            left: 0,
            position: 'absolute',
            width: 0,
        },
    },
    portfolioCardContainer: {

    },
}));

export default function MyWork() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography
                className={classes.typographyH1}
                variant="h1"
            >
                My Work
            </Typography>
            <div className={classes.portfolioCardContainer}>
                {
                    // PORTFOLIO_ITEMS.map(item => (
                    //     <PortfolioCard
                    //         description={item.description}
                    //         // media={ICEBERG_FINDER_MEDIA}
                    //         slug={item.slug}
                    //         // tags={['Development', 'UI Design']}
                    //         title={item.title}
                    //     />
                    // ))
                }
            </div>
        </div>
    );
}
