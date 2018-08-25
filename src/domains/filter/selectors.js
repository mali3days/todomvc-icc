import { createSelector } from 'reselect'
import { selectEntityFromDomain } from '../../lib/selectorHelpers'

export const filterIndex = createSelector(
  state => state.filter,
  _ => _
)

export const filterById = selectEntityFromDomain('filter')

