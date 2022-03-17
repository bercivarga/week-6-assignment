import { ViewClass } from "./View";
import swal from 'sweetalert';

class Todos extends ViewClass {
    clear() {
        document.querySelector(".todos").innerHTML = ""
    }

    render(todos, deleteFunction, saveFunction) {
        this.clear()
        let todoList = document.querySelector('.todos')
        for (let i of todos) {
            todoList.innerHTML += 
                `<div' class='todo'>
                    <div>${i.title}</div>
                    <div id='${i.title}' class='todobuttons'>
                        <button class='edit'>edit</button>
                        <button class='delete'>delete</button>
                    </div>
                </div>`    
        }

        addDeleteButtonEventHandler(deleteFunction)
        addEditButtonEventHandler(saveFunction)
    }

}

function addDeleteButtonEventHandler(stateFunction) {
    let deleteButtonArray = document.querySelectorAll(".delete");
    for (let i of deleteButtonArray) {
      i.addEventListener("click", function () {
          swal({
              title: "Are you sure?",
              text: "Are you sure that you want to delete this todo?",
              icon: "warning",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Deleted!", "Your todo has been deleted!", "success");
                stateFunction(i.parentElement.id)
              }
            });
          
          
      });
    }
  }

function addEditButtonEventHandler(stateFunction) {
    let editButtonArray = document.querySelectorAll(".edit");
    for (let i of editButtonArray) {
        i.addEventListener("click", function () {
            swal({
                title: "Edit todo",
                content: "input",
                button: {
                  text: "Save!",
                  closeModal: true,
                }
            }).then(function(newTitle) {
                console.log(i)
                stateFunction(i.parentElement.id, newTitle)
            })
        })
    }
}

export default new Todos()