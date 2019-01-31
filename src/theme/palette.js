import {darken, lighten} from '../style-utils';

const PRIMARY = '#0A1633';
const SECONDARY = '#0135C8';

const WHITE = '#fff';
// const BLACK = '#0C0C0C';

const palette = {
    background: {
        main: '#ECECEC',
    },
    primary: {
        contrastText: WHITE,
        dark: '#040917',
        light: lighten(PRIMARY, 0.5),
        main: PRIMARY,
    },
    secondary: {
        contrastText: WHITE,
        dark: darken(SECONDARY, 0.25),
        light: lighten(SECONDARY, 0.6),
        main: SECONDARY,
    },
};

export default palette;
