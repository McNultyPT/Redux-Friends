import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

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
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        onChange={this.handleChanges}
                    /> 
                    <input
                        type='text'
                        placeholder='Age'
                        name='age'
                        onChange={this.handleChanges}
                     /> 
                    <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        onChange={this.handleChanges}
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