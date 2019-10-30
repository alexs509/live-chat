import { ADD_ITEM, GET_MESSAGES_SUCCESS, GET_MESSAGES_ERROR } from './action'


export function addItem(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state,action.message]
      case GET_MESSAGES_SUCCESS:
        return [...state,...action.messages]
      case GET_MESSAGES_ERROR:
        return [...state,]
    default:
      return state
  }
}
