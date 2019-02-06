import { FETCH_FRIEND_START, FETCH_FRIEND_SUCCESS, FETCH_FRIEND_ERROR } from '../actions';

const initialState = {
    friends: [],
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
                ...state,
                fetchingFriends: true,
                friendsFetched: false
        };
        case FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friendsFetched: true,
                friends: action.payload
        };
        case FETCH_FRIEND_ERROR:
            return {
                ...state,
                fetchingFriends: false,
                friendsFetched: false,
                error: action.payload
        };
        default:
            return state;
    }   
}

export default reducer;