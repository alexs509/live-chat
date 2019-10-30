import { ADD_ITEM } from './action'


export function addItem(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state,action.content]
    default:
      return state
  }
}

//const addItem = addItem()

export default addItem