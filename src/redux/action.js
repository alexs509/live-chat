/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM'

/*
 * action creators
 */

export const addItem = (content, username) => ({
        type : ADD_ITEM,
        content,
        username
 });
