import React from 'react';
import { connect } from 'react-redux';

import './Friends.css';

function Friends(props) {

    return (
        <div className='friendCont'>
            <h1>Friends List</h1>
            {props.friends.map(friend => (
                <div className='friend'>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    friends: state.friends
});

export default connect(mapStateToProps, {})(Friends);