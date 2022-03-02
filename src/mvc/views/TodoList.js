import { ViewClass } from "./View";

class TodoList extends ViewClass {
  clear() {
    document.querySelector(".todo-list").innerHTML = "";
  }

  render(todos, callback) {
    const todoList = document.querySelector(".todo-list");
    const fragment = document.createDocumentFragment();

    todos.forEach((todo) => {
      const todoCard = document.createElement("div");
      const todoBtn = document.createElement("button");
      const changeBtn = document.createElement("button");
      todoCard.append(todoBtn, changeBtn)
      todoCard.className = "todo-card";
      todoBtn.className = "todo-btn";
      changeBtn.className = "todo-btn";
      todoBtn.innerText = todo.name;
      changeBtn.innerText = "Change"
      todoBtn.addEventListener("click", () => callback(todo.id));
      fragment.append(todoCard);
    });

    todoList.append(fragment);
  }
}

export default new TodoList();
