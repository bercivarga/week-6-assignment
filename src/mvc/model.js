export let store = {
    todos: [],
    user: {
      id: 1,
      name: 'David',
      profileImageSrc: 'https://media-exp1.licdn.com/dms/image/C4E03AQEc-_IeGQYaLA/profile-displayphoto-shrink_400_400/0/1517454647694?e=1652313600&v=beta&t=9ihhjWg-BUoEVdUebwfCZZq9ys4e0_R5rAySBgM_1AM',
    }
   }
 
// State updating user name
export function updateUserName(newName) {
  store.user.name = newName
}

// State adding todo
export function addStoreTodo(inputElement, renderFunction) {
  newTodo = {
    userId: store.user.id,
    id: store.todos.length + 1,
    title: inputElement.value
   }
  store.todos = store.todos.concat(newTodo)
  inputElement.value = ''
  renderFunction(store.todos)
}

//State delete todo
export function deleteStoreTodo(todoTitle, renderFunction) { 
  store.todos = store.todos.filter(i => i.title !== todoTitle)
  renderFunction(store.todos, deleteStoreTodo, renderFunction)
}

//State edit todo
export function editStoreTodo(todoTitle, renderFunction) {
  renderFunction(todoTitle)
}

//State saving todo edit
export function saveTodoEdit (todoTitle, changedTitle, renderFunction) {
  let editedTodo = store.todos.find(i => i.title == todoTitle)
  editedTodo.title = changedTitle
  renderFunction(store.todos)
}