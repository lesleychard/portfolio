import classNames from 'classnames';
import {
    Icon,
    withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';

import {fontSmooth} from '../style-utils';

const DIRECTION_BOTTOM = 'bottom';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const DIRECTION_TOP = 'top';

const DIRECTIONS = [
    DIRECTION_BOTTOM,
    DIRECTION_LEFT,
    DIRECTION_RIGHT,
    DIRECTION_TOP,
];

const styles = (theme) => {
    const hoverTransform = 'translateY(-15%)';

    const iconXTransform = 'translateX(-50%)';
    const iconHoverTranslateY = '0.2em';

    const leftTransformRotate = 'rotate(-90deg)';
    const leftTransformTranslate = 'translateY(-100%)';
    const rightTransformRotate = 'rotate(90deg)';
    const rightTransformTranslate = 'translateY(-30%)';

    return {
        root: {
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            extend: fontSmooth,
            display: 'inline-block',
            fontSize: '1em',
            fontWeight: theme.typography.fontWeightMedium,
            padding: '0.75em 1.2em',
            pointerEvents: 'all',
            position: 'relative',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: `transform ${theme.transitions.duration.short}ms`,
            willChange: 'transform',
            [theme.breakpoints.up('sm')]: {
                background: 'transparent',
                padding: '1.35em 1em 0.5em',
                '&:hover': {
                    transform: hoverTransform,
                },
            },
        },
        bottom: {
            background: 'transparent',
            padding: '0 0 1.35em',
            '&:hover': {
                transform: 'translateY(15%)',
                '& $icon': {
                    transform: `translateY(${iconHoverTranslateY})`,
                },
            },
        },
        left: {
            transform: `${leftTransformRotate} translateY(100%)`,
            transformOrigin: 'bottom left',
            [theme.breakpoints.up('sm')]: {
                transform: `${leftTransformRotate} ${leftTransformTranslate}`,
                transformOrigin: 'bottom right',
                '&:hover': {
                    transform: `${leftTransformRotate} ${leftTransformTranslate} ${hoverTransform}`,
                    '& $icon': {
                        transform: `${iconXTransform} translateY(-${iconHoverTranslateY})`,
                    },
                },
            },
        },
        right: {
            transform: 'rotate(90deg)',
            transformOrigin: 'top right',
            [theme.breakpoints.up('sm')]: {
                transform: `${rightTransformRotate} ${rightTransformTranslate}`,
                transformOrigin: 'bottom left',
                '&:hover': {
                    transform: `${rightTransformRotate} ${rightTransformTranslate} ${hoverTransform}`,
                    '& $icon': {
                        transform: `${iconXTransform} translateY(-${iconHoverTranslateY})`,
                    },
                },
            },
        },
        icon: {
            display: 'none',
            left: '50%',
            position: 'absolute',
            top: 0,
            transform: iconXTransform,
            transition: `transform ${theme.transitions.duration.short}ms`,
            willChange: 'transform',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        iconBottom: {
            display: 'block',
            left: '-0.2em',
            marginBottom: '-0.2em',
            top: 'auto',
            bottom: 0,
            transform: 'none',
        },
    };
};

class NavLink extends PureComponent {
    static defaultProps = {
        children: null,
        className: null,
        direction: DIRECTION_RIGHT,
    };

    static propTypes = {
        children: PropTypes.node,
        classes: PropTypes.object.isRequired,
        className: PropTypes.string,
        direction: PropTypes.oneOf(DIRECTIONS),
    };

    render() {
        const {
            children,
            classes,
            className: classNameProp,
            direction,
            ...other
        } = this.props;
        return (
            <RouterNavLink
                className={classNames(
                    classes.root,
                    {
                        [classes.bottom]: direction === DIRECTION_BOTTOM,
                        [classes.left]: direction === DIRECTION_LEFT,
                        [classes.right]: direction === DIRECTION_RIGHT,
                        [classes.top]: direction === DIRECTION_TOP,
                    },
                    classNameProp,
                )}
                {...other}
            >
                <Icon
                    className={classNames(
                        classes.icon,
                        {
                            [classes.iconBottom]: direction === DIRECTION_BOTTOM,
                        },
                    )}
                >
                    {
                        direction === DIRECTION_BOTTOM
                            ? 'keyboard_arrow_down'
                            : 'keyboard_arrow_up'
                    }
                </Icon>
                {children}
            </RouterNavLink>
        );
    }
}

export default withStyles(styles)(NavLink);
