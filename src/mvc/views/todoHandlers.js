// import { addStoreTodo, deleteStoreTodo, saveTodoEdit  } from "./model";
import { renderTodoList, renderEditPopup, closeEditPopup } from "./renderingLogic";

// // HTML element variables
// let addButton = document.querySelector(".addtodo");
// let todoInput = document.querySelector(".newtodo");


// // Event handlers
// addButton.addEventListener("click", function () {
//   addStoreTodo(todoInput, renderTodoList);
// });

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
