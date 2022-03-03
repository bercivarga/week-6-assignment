// Import the functions you need from the SDKs you need

import { popEditTodo } from "./popup.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFapfvk7kydm8nJ4pklILJHeF-TCdf_fg",
    authDomain: "todo-b272c.firebaseapp.com",
    databaseURL: "https://todo-b272c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-b272c",
    storageBucket: "todo-b272c.appspot.com",
    messagingSenderId: "817046981120",
    appId: "1:817046981120:web:0ee0f7237ac316a6a0e6e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();


export const _ref = ref; /////<----berci how should we do this properly? [sharing imported functions]
export const _remove = remove;
export const _db = db;
export const _push = push;
export const _set = set;


export function readTodo(user) {
    let list = document.getElementById("list")
    let userRef = ref(db, 'users/' + user);
    //console.log(userRef)
    if (userRef != "null") {
        onValue(userRef, (snapshot) => {
            list.innerHTML = '';
            let data = snapshot.val();
            //console.log(data);
            for (let item of Object.values(data)) {
                if (typeof (item) != "undefined") {
                    list.innerHTML += `<li id="${item.id}">${item.title}</li>`;
                }
            }
            var listElement = document.getElementsByTagName('li');
            for (let itemEdit of listElement) {
                itemEdit.addEventListener("click", function () { popEditTodo(user, itemEdit.id, itemEdit.innerHTML, false) }, false);
            }
        })
    }
}

export function deleteDB() {
    remove(ref(db, 'users'));
}


export function writeTodo(userId, id, title, completed) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId + '/' + id), {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    });
}