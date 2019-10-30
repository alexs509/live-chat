import ReduxThunk from 'redux-thunk';
import axios from 'axios'


// Action types

export const ADD_ITEM = 'ADD_ITEM'
export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES'
export const GET_MESSAGES_ERROR = 'GET_MESSAGES'


// Action creators

export const addItem = (content, username) => ({
        type: ADD_ITEM,
        content,
        username
});


export function functiongetMessages(){
        return (dispatch) => {
        dispatch({ type: GET_MESSAGES })

        return axios.get("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages")
                .then(response => console.log(response))
                .then(json => {
                        dispatch({ type: GET_MESSAGES_SUCCESS, messages: json.messages })
                })
                .catch(err => dispatch({ type: GET_MESSAGES_ERROR, error: err }));
        }
}
