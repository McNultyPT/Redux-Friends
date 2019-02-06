import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

class Friends extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div>
                <h1>Friends List</h1>
                {this.props.friends.map(friend => (
                    <div>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
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