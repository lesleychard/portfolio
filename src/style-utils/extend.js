export const container = theme => ({
    padding: '6rem 0 5rem 1.5rem',
    [theme.breakpoints.up('sm')]: {
        padding: '10vh 15vw 4rem',
    },
});

export const fontSmooth = {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'greyscale',
    fontSmooth: 'always',
};

export const fontSmoothOff = {
    '-webkit-font-smoothing': 'auto',
    '-moz-osx-font-smoothing': 'auto',
    fontSmooth: 'auto',
};

export const stripUl = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
};
