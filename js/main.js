import { store, updateUserName, retrieveDefaultTodos } from "../store/store";
import { renderTodoList, renderHeader } from "../js/renderingLogic"
import "../js/todoHandlers"


updateUserName(store.user.name)
renderHeader(store.user.name)

retrieveDefaultTodos(store.user.id, renderTodoList)