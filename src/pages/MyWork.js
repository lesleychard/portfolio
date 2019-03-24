// import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {
    MyWorkMain,
    MyWorkSingle,
} from '.';

class MyWork extends PureComponent {
    static propTypes = {
        match: PropTypes.object.isRequired,
    };

    render() {
        const {match} = this.props;
        const {id} = match.params;
        return (
            <>
                {
                    id
                        ? <MyWorkSingle id={id} />
                        : <MyWorkMain />
                }
            </>
        );
    }
}

export default MyWork;
