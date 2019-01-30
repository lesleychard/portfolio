import {darken, lighten} from '../style-utils';

const PRIMARY = '#0C0C0C';
const SECONDARY = '#0135C8';

const WHITE = '#fff';
// const BLACK = '#0C0C0C';

const palette = {
    primary: {
        contrastText: WHITE,
        dark: darken(PRIMARY, 0.25),
        light: lighten(PRIMARY, 2),
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
