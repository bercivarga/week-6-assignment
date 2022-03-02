import { ViewClass } from './View'

class TodoList extends ViewClass {
  clear() {
    document.querySelector('.todo-list').innerHTML = ''
  }

  render(todos, callback) {
    const todoList = document.querySelector('.todo-list')
    const fragment = document.createDocumentFragment()
    todos.forEach(todo => {
      const todoCard = document.createElement('button')
      todoCard.className = "todo-card"
      todoCard.innerText = todo.name
      todoCard.addEventListener('click', () => callback(todo.id))
      fragment.append(todoCard)
    })
    todoList.append(fragment)
  }
}

export default new TodoList()
