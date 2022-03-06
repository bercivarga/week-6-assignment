import { addStoreTodo, deleteStoreTodo, saveTodoEdit  } from "../store/store";
import { renderTodoList, renderEditPopup, closeEditPopup } from "../js/renderingLogic";

// HTML element variables
let addButton = document.querySelector(".addtodo");
let todoInput = document.querySelector(".newtodo");

// Event handlers
addButton.addEventListener("click", function () {
  addStoreTodo(todoInput, renderTodoList);
});

export function addDeleteButtonEventHandler() {
  let deleteButtonArray = document.querySelectorAll(".delete");
  for (let i of deleteButtonArray) {
    i.addEventListener("click", function () {
      deleteStoreTodo(i.parentElement.id, renderTodoList);
    });
  }
}

export function addEditButtonEventHandler() {
  let editButtonArray = document.querySelectorAll(".edit");
  for (let i of editButtonArray) {
    i.addEventListener("click", function () {
      renderEditPopup(i.parentElement.id, renderEditPopup);
    });
  }
}

export function addSaveButtonEventHandler() {
  let saveButton = document.querySelector(".save");
  let editButton = document.querySelector(".editinput");
  saveButton.addEventListener("click", function () {
    saveTodoEdit(saveButton.id, editButton.value, renderTodoList);
    closeEditPopup();
  });
}
