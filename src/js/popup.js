import { writeTodo, _ref, _remove, _db } from "./firebase.js";
import Swal from 'sweetalert2'

export function popEditTodo(userId, id, title, completed) {
    Swal.fire({
        title: `Edit todo!`,
        html: `<br> 
            <textarea rows="4" cols="50" class="popinput" id="mytodo">${title}</textarea>
              <button type="button" class="btn btn-update ">Update</button> <br><br>
              <button type="button" class="btn btn-remove ">Delete</button>
              <button type="button" class="btn btn-cancel " >Cancel</button>`,
        showCancelButton: false,
        showConfirmButton: false,
        preConfirm: () => {

        }
    })

    const update = document.querySelector('.btn-update')
    const remove = document.querySelector('.btn-remove')
    const cancel = document.querySelector('.btn-cancel')

    update.addEventListener('click', () => {
        console.log('Yes was Cliked.')
        console.log(document.getElementById("mytodo").value)
        writeTodo(userId, id, document.getElementById("mytodo").value, completed)
        Swal.close()
    })

    remove.addEventListener('click', () => {
        console.log('no was Cliked.');
        _remove(_ref(_db, 'users/' + userId + '/' + id));
        Swal.close()
    })

    cancel.addEventListener('click', () => {
        Swal.close()
    })


}