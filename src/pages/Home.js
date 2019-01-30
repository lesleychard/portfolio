import {makeStyles} from '@material-ui/styles';
import React from 'react';

const backgroundImg = require('../assets/img/main-background.jpg');

const useStyles = makeStyles(theme => ({
    root: {
        background: `${theme.palette.primary.light} url(${backgroundImg}) no-repeat center center`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Homepage
        </div>
    );
}
