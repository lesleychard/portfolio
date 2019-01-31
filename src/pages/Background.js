import {makeStyles} from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.common.white,
    },
}));

export default function Background() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Background
        </div>
    );
}
