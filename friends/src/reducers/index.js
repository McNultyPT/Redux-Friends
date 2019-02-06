import { FETCH_FRIEND_START, FETCH_FRIEND_SUCCESS, FETCH_FRIEND_ERROR } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendAdded: false,
    addingFriends: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_FRIEND_START:
            return {

        };
        case FETCH_FRIEND_SUCCESS:
            return {

        };
        case FETCH_FRIEND_ERROR:
            return {

        };
        default:
            return state;
    }   
}

export default reducer;