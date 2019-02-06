import axios from 'axios';

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_ERROR = 'FETCH_FRIEND_ERROR';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIEND_START });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => console.log(res))
        .catch(err => console.log(err));
}