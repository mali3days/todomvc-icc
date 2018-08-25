import { createAction } from 'redux-actions'
import { APPLY_FILTER } from './constants'

export const applyFilter = createAction(APPLY_FILTER, (listId, value) => ({ listId, value }))
