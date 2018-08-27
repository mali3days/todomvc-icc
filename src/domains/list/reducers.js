import { handleActions } from 'redux-actions'

import {
  ADD_TO_LIST,
  DELETE_FROM_LIST
} from './constants'

const initialState = {
  byId: {
    0: { id: 0, title: 'Home', tasks:[0] },
    1: { id: 1, title: 'Work', tasks:[] },
    2: { id: 2, title: 'All', tasks:[] }
  },
  byOrder: [0, 1, 2]
}

export default handleActions({
  [ADD_TO_LIST]: addToList,
  [DELETE_FROM_LIST]: deleteFromList
}, initialState)

function addToList({ byId, byOrder }, { payload }) {

  const list = byId[payload.listId]
  const newTasks = [...list.tasks, payload.todoId]

  return {
    byId: {
      ...byId,
      [payload.listId]: {
        ...list,
        tasks: newTasks,
      }
    },
    byOrder
  }
}

function deleteFromList({ byId, byOrder }, { payload }) {
  const list = byId[payload.listId]
  const newTasks = list.tasks.filter(id => id !== payload.todoId)

  return {
    byId: {
      ...byId,
      [payload.listId]: {
        ...list,
        tasks: newTasks
      }
    },
    byOrder
  }
}
