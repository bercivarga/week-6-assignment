import { store, updateUserName, retrieveDefaultTodos } from "../store/store";
import { renderTodoList, renderTitle } from "../js/renderingLogic"
import "../js/todoHandlers"


updateUserName('David Test')

renderTitle(store.user.name)

retrieveDefaultTodos(store.user.id, renderTodoList)