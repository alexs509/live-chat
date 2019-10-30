import ReduxThunk from 'redux-thunk';
import axios from 'axios'


// Action types

export const ADD_ITEM = 'ADD_ITEM'
export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR'


// Action creators

export const addItem = (message, username) => ({
        type: ADD_ITEM,
        message,
        username
});


export function functiongetMessages() {
        return (dispatch) => {
                dispatch({type: GET_MESSAGES})

                return axios.get('https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages')
                        .then(json => {
                                dispatch({
                                        type: GET_MESSAGES_SUCCESS,
                                        messages: json.data,
                                })
                        })
                        .catch(err => dispatch({ type: GET_MESSAGES_ERROR, error: err }));
        }
}
