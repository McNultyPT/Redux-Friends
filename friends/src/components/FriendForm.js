import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

import './Friends.css';

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    };

    render() {
        return (
            <div className='friendFormCont'>
                <form onSubmit={this.addFriend}>
                    <div className='formHeader'>
                        <h1>Add a Friend</h1>
                    </div>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        onChange={this.handleChanges}
                        value={this.state.friend.name}
                    /> 
                    <input
                        type='text'
                        placeholder='Age'
                        name='age'
                        onChange={this.handleChanges}
                        value={this.state.friend.age}
                     /> 
                    <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        onChange={this.handleChanges}
                        value={this.state.friend.email}
                    />
                    <button>Add Friend</button> 
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting
    };
};

export default connect(mapStateToProps, { addFriend })(FriendForm);