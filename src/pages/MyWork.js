import {makeStyles} from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles(({
    root: {},
}));

export default function MyWork() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            My Work
        </div>
    );
}
