import View from "./views/View"
import Todos from "./views/TodoList"
import { store, updateUserName, retrieveDefaultTodos, deleteStoreTodo, editStoreTodo } from "./model";
// import { renderTodoList, renderHeader } from "./views/renderingLogic"


export function init() {
    console.log('error')
    updateUserName(store.user.name)
    View.render(store.user.name)

    
    //d renderHeader(store.user.name)
    // retrieveDefaultTodos(store.user.id, renderTodoList)
}

function getDefaultData () {
    retrieveDefaultTodos(store.user.id).then(Todos.render(store.todos))

}