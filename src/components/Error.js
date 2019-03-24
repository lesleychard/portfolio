import classNames from 'classnames';
import {
    Icon,
    Typography,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

const DEFAULT_COPY = 'Something went wrong. Have you tried turning it off and on again?';

const styles = theme => ({
    root: {
        textAlign: 'center',
    },
    icon: {
        color: theme.palette.error.main,
        fontSize: '3rem',
        marginBottom: '1rem',
    },
});

class Error extends PureComponent {
    static defaultProps = {
        children: DEFAULT_COPY,
        className: null,
    };

    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {
            children,
            className: classNameProp,
            classes,
        } = this.props;
        return (
            <div
                className={classNames(
                    classes.root,
                    classNameProp,
                )}
            >
                <Icon className={classes.icon}>
                    thumb_down
                </Icon>
                <Typography
                    gutterBottom
                    variant="h2"
                >
                    Well, this is awkward.
                </Typography>
                <Typography>
                    {children}
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Error);
