import { config } from "./config.js";
import { readTodo, deleteDB } from "./firebase.js";
import { initList } from "./initlist.js";
import { popAddTodo } from "./popupadd.js";


document.getElementById("initlist").addEventListener("click", function () { initList(config.initurl) });
document.getElementById("deletedb").addEventListener("click", function () { deleteDB() });
document.getElementById("search").addEventListener("click", function () { readTodo(document.getElementById("username").value) });
document.getElementById("add").addEventListener("click", function () { popAddTodo(document.getElementById("username").value, Math.random().toString(36).slice(2), '', false) });

