import {makeStyles} from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.light,
        color: theme.palette.common.white,
        height: '100vh',
        width: '100vw',
    },
}));

export default function MyWork() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            My Work
        </div>
    );
}
