import { ViewClass } from './View'

class AddTodo extends ViewClass {
  button = undefined

  addButtonEventListener(callback) {
    this.button.addEventListener('click', callback)
  }

  render() {
    const button = document.createElement('button')
    button.innerText = 'Add todo'
    button.className = 'add-button'

    this.button = button
    this.parentEl.after(button)
  }
}

export default new AddTodo()