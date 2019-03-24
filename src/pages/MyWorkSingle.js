import axios from 'axios';
import {
    Button,
    CircularProgress,
    Icon,
    Typography,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';

import {
    Error,
    Footer,
    Gallery,
} from '../components';
import {
    LOCATION_MY_WORK,
} from '../location';
import {container} from '../style-utils';

const styles = theme => ({
    root: {
        // background: theme.palette.background.main,
    },
    container: {
        extend: container(theme),
        minHeight: '100vh',
        paddingTop: '4rem',
        paddingRight: '2rem',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '0.75rem',
        },
    },
    buttonMyWork: {
        fontSize: '1.2em',
        marginLeft: '-0.5em',
        padding: '1em 0',
        textTransform: 'none',
        '&:hover': {
            background: 'transparent',
        },
    },
    iconMyWork: {
        fontSize: '1.9em',
        marginRight: '0.5em',
        paddingRight: '1.5em',
        position: 'relative',
        '&:before': {
            background: theme.palette.secondary.main,
            content: '""',
            display: 'block',
            height: 3,
            left: '0.4em',
            position: 'absolute',
            right: 0,
            top: '49%',
            transform: 'translateY(-50%)',
        },
    },
    typographyH1: {
        margin: '3rem 0 0.15em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem',
            marginTop: '0.5em',
        },
    },
    buttonVisit: {
        fontSize: '1em',
        marginLeft: '-0.5em',
    },
    iconVisit: {
        display: 'inline-block',
        fontSize: '0.95em',
        margin: '0 0 -3px 0.33em',
        position: 'relative',
    },
    copyBlock: {
        margin: '1rem 0',
        [theme.breakpoints.up('sm')]: {
            margin: '3rem 0',
        },
    },
    typographyLargeLine: {
        lineHeight: 1.5,
        [theme.breakpoints.up('sm')]: {
            lineHeight: 2,
        },
    },
    iconLaunchInline: {
        display: 'inline-block',
        fontSize: '1em',
        margin: '0 0 1px 0.25em',
        verticalAlign: 'text-bottom',
    },
    typographyH2: {
        marginBottom: '1rem',
    },
});

class MyWorkSingle extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
    };

    state = {
        error: false,
        loading: true,
        portfolioItem: {},
    };

    componentDidMount() {
        this.importData();
    }

    importData = async () => {
        const {id} = this.props;
        try {
            const data = await import(`../../data/${id}.yaml`);
            this.loadData(data.default);
        }
        catch (error) {
            console.error(error);
            this.setState({
                error: true,
                loading: false,
            });
        }
    }

    loadData = (data) => {
        axios.get(data)
            .then((res) => {
                const portfolioItem = res.data[0];
                this.setState({
                    loading: false,
                    portfolioItem,
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    error: true,
                    loading: false,
                });
            });
    }

    render() {
        const {
            classes,
            id,
        } = this.props;
        const {
            error,
            loading,
            portfolioItem,
        } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <Button
                        className={classes.buttonMyWork}
                        color="secondary"
                        component={NavLink}
                        to={`/${LOCATION_MY_WORK}`}
                    >
                        <Icon
                            className={classes.iconMyWork}
                        >
                            keyboard_arrow_left
                        </Icon>
                        My Work
                    </Button>
                    {
                        loading
                            ? (
                                <div className={classes.contentContainer}>
                                    <CircularProgress color="secondary" />
                                    <Typography
                                        className={classes.typographyLoading}
                                        variant="caption"
                                    >
                                        One sec while I fetch the deets.
                                    </Typography>
                                </div>
                            )
                            : (
                                <div className={classes.contentContainer}>
                                    <Typography
                                        className={classes.typographyH1}
                                        variant="h1"
                                    >
                                        {portfolioItem.title}
                                    </Typography>

                                    <Button
                                        className={classes.buttonVisit}
                                        color="secondary"
                                        component="a"
                                        href={portfolioItem.url}
                                    >
                                        Visit
                                        <Icon className={classes.iconVisit}>
                                            launch
                                        </Icon>
                                    </Button>

                                    <div className={classes.copyBlock}>
                                        <Typography className={classes.typographyLargeLine}>
                                            Launched
                                            {' '}
                                            {portfolioItem.launchDate}
                                        </Typography>
                                        <Typography className={classes.typographyLargeLine}>
                                            Collab with
                                            {' '}
                                            {
                                                portfolioItem.collab.map(collab => (
                                                    <a
                                                        href={collab.href}
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                    >
                                                        {collab.title}
                                                        <Icon className={classes.iconLaunchInline}>
                                                            launch
                                                        </Icon>
                                                    </a>
                                                ))
                                            }
                                        </Typography>
                                    </div>

                                    <div className={classes.copyBlock}>
                                        {
                                            portfolioItem.intro.map(copy => (
                                                <Typography>
                                                    {copy}
                                                </Typography>
                                            ))
                                        }
                                    </div>

                                    <Gallery
                                        animationDelay={500}
                                        directory={`img/portfolio/${id}/`}
                                        images={portfolioItem.gallery}
                                    />

                                    <div className={classes.copyBlock}>
                                        <Typography
                                            className={classes.typographyH2}
                                            variant="h2"
                                        >
                                            My role
                                        </Typography>
                                        {
                                            portfolioItem.myRole.map(copy => (
                                                <Typography>
                                                    {copy}
                                                </Typography>
                                            ))
                                        }
                                    </div>

                                    <div className={classes.copyBlock}>
                                        <Typography
                                            className={classes.typographyH2}
                                            variant="h2"
                                        >
                                            Awards &amp; nods
                                        </Typography>
                                        {
                                            portfolioItem.awards.map(award => (
                                                <Typography className={classes.typographyLargeLine}>
                                                    <a
                                                        href={award.href}
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                    >
                                                        {award.title}
                                                        <Icon className={classes.iconLaunchInline}>
                                                            launch
                                                        </Icon>
                                                    </a>
                                                </Typography>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                    }
                    {
                        error
                            ? <Error />
                            : null
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(MyWorkSingle);
