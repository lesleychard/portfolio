import {fontFaces} from '.';

const globals = theme => ({
    '@global': {
        ...fontFaces,
        '*': {
            boxSizing: 'border-box',
        },
        body: {
            fontFamily: theme.typography.fontFamily,
            fontSize: `${theme.typography.fontSize}px`,
            margin: 0,
            [theme.breakpoints.up('md')]: {
                fontSize: `${theme.typography.fontSizeMd}px`,
            },
        },
        a: {
            color: theme.palette.primary.main,
        },
    },
});

export default globals;
