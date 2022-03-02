import { model } from './model'
import View from '../mvc/views/View'
import TodoList from './views/TodoList'
import AddTodo from './views/AddTodo'

export function init() {
  View.render(model.user.name)
  TodoList.render(model.todos, handleDeleteTodo)
  AddTodo.render()
}

function handleDeleteTodo(id) {
  TodoList.clear()
  model.todos = model.todos.filter(todo => todo.id !== id)
  refresh()
}

function refresh() {
  TodoList.render(model.todos, handleDeleteTodo)
}
