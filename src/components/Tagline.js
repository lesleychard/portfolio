import classNames from 'classnames';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {fontSmooth} from '../style-utils';

const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        extend: fontSmooth,
        '&> em': {
            display: 'block',
        },
    },
    sizeSmall: {
        fontSize: '0.85em',
        lineHeight: 1,
    },
    sizeMedium: {
        fontSize: '1em',
        lineHeight: 1.1,
    },
    sizeLarge: {
        fontSize: '1.3em',
        lineHeight: 1.1,
    },
});

class Tagline extends PureComponent {
    static defaultProps = {
        className: null,
        size: 'medium',
    };

    static propTypes = {
        className: PropTypes.string,
        classes: PropTypes.object.isRequired,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
    };

    render() {
        const {
            className: classNameProp,
            classes,
            size,
        } = this.props;

        return (
            <Typography
                className={classNames(
                    classes.root,
                    {
                        [classes.sizeSmall]: size === 'small',
                        [classes.sizeMedium]: size === 'medium',
                        [classes.sizeLarge]: size === 'large',
                    },
                    classNameProp,
                )}
                component="p"
                gutterBottom
                variant="h6"
            >
                <em>Award winning</em>
                {' '}
                interaction developer
            </Typography>
        );
    }
}

export default withStyles(styles)(Tagline);
