import {
    addDeleteButtonEventHandler,
    addEditButtonEventHandler,
    addSaveButtonEventHandler,
} from './todoHandlers'
let listElement = document.querySelector('.todos')
let edit = document.querySelector('.editpopup')
let usertitle = document.querySelector('.usertitle')

export function renderHeader(userName) {
    usertitle.innerHTML = `<h1>${userName}'s todo's</h1>`
}

export function renderTodoList(storeTodoList) {
    listElement.innerHTML = null
    for (let i of storeTodoList) {
        listElement.innerHTML += `<div' class='todo'>
                <div>${i.title}</div>
                <div id='${i.title}' class='todobuttons'>
                    <button class='edit'>edit</button>
                    <button class='delete'>delete</button>
                </div>

            </div>`
    }
    addDeleteButtonEventHandler()
    addEditButtonEventHandler()
}

export function renderEditPopup(todoTitle) {
    edit.style.display = 'block'
    edit.innerHTML = `
        <div class='popup'>
            <h1>Enter new todo title:</h1>
            <input class='editinput' value='${todoTitle}'>
            <button id='${todoTitle}' class='save'>SAVE</button>
        </div
        `
    addSaveButtonEventHandler()
}

export function closeEditPopup() {
    edit.style.display = 'none'
    edit.innerHTML = '<div></div>'
}
