import { 
    FETCH_FRIEND_START,
    FETCH_FRIEND_SUCCESS,
    FETCH_FRIEND_ERROR,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_ERROR
 } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    isPosting: false,
    error: ''
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
        case ADD_FRIEND_START:
            return {
                ...state,
                isPosting: true,   
            };
        case ADD_FRIEND_SUCCESS:
             return {
                ...state,
                isPosting: false,
                friends: action.payload
            };
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };  
        default:
            return state;
    }   
}

export default reducer;