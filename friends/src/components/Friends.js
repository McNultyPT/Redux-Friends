import React from 'react';
import { connect } from 'react-redux';

function Friends(props) {

    return (
        <div>
            <h1>Friends List</h1>
            {props.friends.map(friend => (
                <div>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    friends: state.friends
});

export default connect(mapStateToProps, {})(Friends);