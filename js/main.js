import { store, updateUserName, retrieveDefaultTodos } from "../store/store";
import { renderTodoList } from "../js/renderingLogic"
import "../js/todoHandlers"


updateUserName('David Test')

retrieveDefaultTodos(store.user.id, renderTodoList)