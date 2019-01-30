import {makeStyles} from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
    },
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Navigation
        </div>
    );
}
