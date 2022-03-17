import View from "./views/View"
import Todos from "./views/TodoList"
import { store, updateUserName, retrieveDefaultTodos, editStoreTodo } from "./model";
// import { renderTodoList, renderHeader } from "./views/renderingLogic"


export function init() {
    updateUserName(store.user.name)
    View.render()
    getDefaultData()
    // retrieveDefaultTodos(store.user.id, renderTodoList)
}

async function getDefaultData () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await response.json()
        data = data.filter(todo => todo.userId == store.user.id)
        store.todos = data
        Todos.render(store.todos, deleteStoreTodo, saveTodoEdit)
    } catch (err) {
        console.error(err)
    }
}

function deleteStoreTodo(todoTitle) { 
    store.todos = store.todos.filter(i => i.title !== todoTitle)
    Todos.render(store.todos, deleteStoreTodo, saveTodoEdit)
}

function saveTodoEdit (todoTitle, changedTitle) {
    let editedTodo = store.todos.find(i => i.title == todoTitle)
    editedTodo.title = changedTitle
    Todos.render(store.todos, deleteStoreTodo, saveTodoEdit)
}