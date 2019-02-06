import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

class Friends extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Friends List</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched
});

export default connect(mapStateToProps, { getFriends })(Friends);