import React from 'react'
import Task from './Task'

class ListTodo extends React.Component {
  render() {
    return (
      <ul>
        <Task value='Tarefa 1' status='Done' />
        <Task value='Tarefa 2' status='Done' />
        <Task value='Tarefa 3' status='Done' />
        <Task value='Tarefa 4' status='Done' />
        <Task value='Tarefa 5' status='Done' />
      </ul>
    )
  }
}

export default ListTodo
