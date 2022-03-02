import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import { model } from "./model";
import View from "../mvc/views/View";
import TodoList from "./views/TodoList";
import AddTodo from "./views/AddTodo";
import { Todo } from "../helpers/Todo";

export function init() {
  View.render(model.user);
  TodoList.render(model.todos, handleDeleteTodo, handleChangeTodo); // Not really best practice here...
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
    confirmButtonColor: "seagreen",
  }).then((result) => {
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
    confirmButtonColor: "#d33",
    cancelButtonColor: "gray",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      model.todos = model.todos.filter((todo) => todo.id !== id);
      refresh();
    } else if (result.isDenied) {
      return;
    }
  });
}

function handleChangeTodo(id) {
  Swal.fire({
    title: "Change todo to...",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Change",
    confirmButtonColor: "seagreen",
  }).then((result) => {
    if (result.isConfirmed && result.value.length > 0) {
      const todo = model.todos.find(todo => todo.id === id);
      todo.name = result.value;
      refresh();
    }
  });
}

function refresh() {
  TodoList.clear();
  TodoList.render(model.todos, handleDeleteTodo, handleChangeTodo); // TODO: find some alternative for this
}
