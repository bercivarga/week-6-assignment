import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import { model } from "./model";
import View from "../mvc/views/View";
import TodoList from "./views/TodoList";
import AddTodo from "./views/AddTodo";
import { Todo } from "../helpers/Todo";

export function init() {
  View.render(model.user.name);
  TodoList.render(model.todos, handleDeleteTodo);
  AddTodo.render();
  AddTodo.addButtonEventListener(handleAddTodo);
}

function handleAddTodo() {
  Swal.fire({
    title: "Write down your todo",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Add",
    showLoaderOnConfirm: true,
  })
  .then((result) => {
    if (result.isConfirmed && result.value.length > 0) {
      model.todos.push(new Todo(result.value));
      refresh();
    }
  });
}

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
      refresh();
    } else if (result.isDenied) {
      return;
    }
  });
}

function refresh() {
  TodoList.clear();
  TodoList.render(model.todos, handleDeleteTodo);
}
