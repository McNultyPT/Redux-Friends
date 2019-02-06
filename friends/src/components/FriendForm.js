import React from 'react';

function FriendForm() {
    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Name'
                /> 
                <input
                    type='text'
                    placeholder='Age'
                /> 
                <input
                    type='text'
                    placeholder='Email'
                />
                <button>Add Friend</button> 
            </form>
        </div>
    );
}

export default FriendForm;