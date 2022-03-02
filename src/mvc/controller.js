import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import { model } from "./model";
import View from "../mvc/views/View";
import TodoList from "./views/TodoList";
import AddTodo from "./views/AddTodo";

export function init() {
  View.render(model.user.name);
  TodoList.render(model.todos, handleDeleteTodo);
  AddTodo.render();
  AddTodo.addButtonEventListener(handleAddTodo);
}

function handleAddTodo() {}

function handleDeleteTodo(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      model.todos = model.todos.filter((todo) => todo.id !== id);
      TodoList.clear();
      refresh();
    } else if (result.isDenied) {
      return;
    }
  });
}

function refresh() {
  TodoList.render(model.todos, handleDeleteTodo);
}
