import { addDeleteButtonEventHandler, addEditButtonEventHandler, addSaveButtonEventHandler } from './todoHandlers'
let listElement = document.querySelector(".todos")
let edit = document.querySelector('.editpopup')

export function renderTodoList (storeTodoList) {
    
    listElement.innerHTML = null
    for (let i of storeTodoList) {
        listElement.innerHTML += 
            `<div id='${i.title}' class='todo'>
                <div>${i.title}</div>
                <button class='edit'>edit</button>
                <button class='delete'>delete</button>
            </div>`    
    }
    addDeleteButtonEventHandler()
    addEditButtonEventHandler()
}



export function renderEditPopup (todoTitle) {
    edit.innerHTML = 
        `
        <div class='shadow'>
            <div class='popup'>
                <h1>Enter new todo title:</h1>
                <input class='editinput' value='${todoTitle}'>
                <button id='${todoTitle}' class='save'>SAVE</button>
            </div
        </div
        `
    addSaveButtonEventHandler()
}

export function closeEditPopup () {
    edit.innerHTML = '<div></div>'
}