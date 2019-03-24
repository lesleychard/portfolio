import {
    Dialog,
    DialogContent,
    GridList,
    GridListTile,
    Typography,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {fade, fontSmooth} from '../style-utils';

const styles = theme => ({
    gridList: {
        overflow: 'visible',
    },
    gridListTile: {
        animation: `fade-in ${theme.transitions.duration.layout * 2}ms forwards`,
        cursor: 'pointer',
        opacity: 0,
        overflow: 'hidden',
        position: 'relative',
        transition: `transform ${theme.transitions.duration.shortest}ms`,
        willChange: 'transform',
        '&:before': {
            background: theme.palette.primary.main,
            bottom: theme.spacing.unit,
            content: '""',
            display: 'block',
            height: '0.33rem',
            left: theme.spacing.unit,
            position: 'absolute',
            right: theme.spacing.unit,
            transform: 'translateY(2rem) scale(1.1)',
            transition: `background ${theme.transitions.duration.standard}ms ${theme.transitions.duration.standard / 2}ms,
                transform ${theme.transitions.duration.standard}ms`,
            zIndex: 1,
        },
        '&:hover': {
            transform: 'scale(1.02)',
        },
        '&:hover:before': {
            background: theme.palette.secondary.main,
            transform: 'translateY(0) scale(1)',
        },
    },
    dialogBackdrop: {
        background: fade(theme.palette.primary.dark, 0.1),
    },
    dialogContainer: {
        overflowY: 'auto',
        margin: '1em',
    },
    dialogPaper: {
        background: 'transparent',
        borderRadius: 0,
        boxShadow: 'none',
        margin: 0,
        maxHeight: 'none',
        maxWidth: '50rem',
        overflow: 'visible',
        width: 'auto',
    },
    dialogContent: {
        overflow: 'visible',
        padding: 0,
        '&:first-child': {
            paddingTop: 0,
        },
    },
    dialogImg: {
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
    },
    dialogTypography: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        extend: fontSmooth,
        padding: '0.25em 0.75em',
        [theme.breakpoints.up('sm')]: {
            bottom: 0,
            position: 'absolute',
            right: 0,
        },
    },
});

class Gallery extends PureComponent {
    static defaultProps = {
        animationDelay: 0,
        directory: null,
        images: [],
    };

    static propTypes = {
        animationDelay: PropTypes.number,
        classes: PropTypes.object.isRequired,
        directory: PropTypes.string,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                alt: PropTypes.string.isRequired,
                cols: PropTypes.number,
                src: PropTypes.string.isRequired,
            }),
        ),
    };

    state = {
        dialogImg: {},
        dialogOpen: false,
    };

    handleGridListItemClick = (e) => {
        const {alt, src} = e.target;
        const dialogImg = {
            alt,
            src,
        };

        this.setState({
            dialogImg,
            dialogOpen: true,
        });
    };

    handleDialogClose = () => {
        this.setState({dialogOpen: false});
    };

    render() {
        const {
            animationDelay,
            classes,
            directory,
            images,
            ...other
        } = this.props;
        const {
            dialogImg,
            dialogOpen,
        } = this.state;

        return (
            <div>
                <GridList
                    cellHeight={175}
                    className={classes.gridList}
                    spacing={8}
                    {...other}
                >
                    {
                        images.map((image, index) => (
                            <GridListTile
                                className={classes.gridListTile}
                                cols={image.cols || 1}
                                key={image.src}
                                onClick={this.handleGridListItemClick}
                                style={{
                                    animationDelay: `${animationDelay + (index * 80)}ms`,
                                }}
                            >
                                <img
                                    alt={image.alt}
                                    src={`${directory}${image.src}`}
                                />
                            </GridListTile>
                        ))
                    }
                </GridList>

                <Dialog
                    BackdropProps={{
                        className: classes.dialogBackdrop,
                    }}
                    classes={{
                        container: classes.dialogContainer,
                        paper: classes.dialogPaper,
                    }}
                    fullWidth
                    open={dialogOpen}
                    onClose={this.handleDialogClose}
                >
                    <DialogContent className={classes.dialogContent}>
                        <img
                            className={classes.dialogImg}
                            alt={dialogImg.alt}
                            src={dialogImg.src}
                        />
                        <Typography className={classes.dialogTypography}>
                            {dialogImg.alt}
                        </Typography>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(Gallery);
