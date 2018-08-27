import { handleActions } from 'redux-actions'

import {
  APPLY_FILTER,
  SHOW_ALL
} from './constants'

const initialState = {
  byId: {
    0: { value: SHOW_ALL, id: 0 },
    1: { value: SHOW_ALL, id: 1 },
    2: { value: SHOW_ALL, id: 2 },
  },
  byOrder: [0, 1, 2] // in case order makes sense (e.g. you need to move/sort todos). This array will have IDs, not the objects
}

export default handleActions({
  [APPLY_FILTER]: applyFilter
}, initialState)

function applyFilter({ byId, byOrder }, { payload }) {
  const list = byId[payload.listId]

  return {
    byId: {
      ...byId,
      [payload.listId]: {
        ...list,
        value: payload.value,
      }
    },
    byOrder
  }
}

