import Color from 'color';

export function darken(color, value) {
    const c = new Color(color);
    return c.darken(value).string();
}

export function fade(color, value) {
    const c = new Color(color);
    return c.fade(value).string();
}

export function lighten(color, value) {
    const c = new Color(color);
    return c.lighten(value).string();
}
