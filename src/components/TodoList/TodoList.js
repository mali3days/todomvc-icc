import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import MainSection from '../MainSection'

const TodoList = ({ list }) => (
  <div>
    <div className="todoapp">
      <Header id={ list.id }/>
      <MainSection id={ list.id }/>
    </div>
  </div>
)

TodoList.propTypes = {
  list: PropTypes.object.isRequired
}

export default TodoList
