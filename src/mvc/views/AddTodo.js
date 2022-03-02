import { ViewClass } from './View'

class AddTodo extends ViewClass {
  render() {
    const button = document.createElement('button')
    button.innerText = 'Add todo'
    button.className = 'add-button'

    this.parentEl.after(button)
  }
}

export default new AddTodo()