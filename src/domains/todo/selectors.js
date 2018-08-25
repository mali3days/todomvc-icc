import { createSelector } from 'reselect'
import { selectEntityFromDomain } from '../../lib/selectorHelpers'

import { listById } from '../list/selectors'

export const todoIndex = createSelector(state => state.todo, _ => _)
export const allTodoIds = createSelector(todoIndex, index => index.byOrder)
export const allTodoItems = createSelector(todoIndex, index => Object.values(index.byId))
export const getLatestId = createSelector(allTodoIds, ids => ids[ids.length - 1])

export const todoById = selectEntityFromDomain('todo')

export const completedCount = createSelector(
  listById,
  todoIndex,
  (list, todoIndex) => {
    const todoIds = list.tasks

    return todoIds.filter(id => todoIndex.byId[id].completed).length;
  }
)

export const activeCount = createSelector(
  listById,
  todoIndex,
  (list, todoIndex) => {
    const todoIds = list.tasks

    return todoIds.filter(id => !todoIndex.byId[id].completed).length;
  }
)

