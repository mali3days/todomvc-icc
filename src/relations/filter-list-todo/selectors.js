import { createSelector } from 'reselect'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../../domains/filter/constants'
import { todoIndex } from '../../domains/todo/selectors'
import { listById } from '../../domains/list/selectors'
import { filterById } from '../../domains/filter/selectors'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export const filteredTodoIds = createSelector(
  listById,
  todoIndex,
  filterById,
  (list, todoIndex, filter) => {
    const todoIds = list.tasks
    return todoIds.filter(id => TODO_FILTERS[filter.value](todoIndex.byId[id]));
  }
)
