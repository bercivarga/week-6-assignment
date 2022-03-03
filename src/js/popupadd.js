import { writeTodo, _ref, _remove, _db, _push, _set } from "./firebase.js";
import { updateLastId, store } from "./store.js";


export function popAddTodo(userId, id, title, completed) {
    swal.fire({
        title: `Add todo!`,
        html: `<br> 
            <textarea rows="4" cols="50" class="popinput" id="mytodo">${title}</textarea>
              <button type="button" class="btn btn-add ">Add</button> <br><br>
              <button type="button" class="btn btn-cancel " >Cancel</button>`,
        showCancelButton: false,
        showConfirmButton: false,
        preConfirm: () => {

        }
    })

    const add = document.querySelector('.btn-add')
    const cancel = document.querySelector('.btn-cancel')

    add.addEventListener('click', () => {
        console.log('Yes was Cliked.')
        console.log(document.getElementById("mytodo").value)
        // writeTodo(userId, store.lastid+1, document.getElementById("mytodo").value, completed)


        const currentref = _ref(_db, 'users/' + userId)
        const newref = _push(currentref)
        _set(newref, {
            userId: userId,
            id: newref.key,
            title: document.getElementById("mytodo").value,
            completed: false
        });

        swal.close()
    })

    cancel.addEventListener('click', () => {
        swal.close()
    })


}