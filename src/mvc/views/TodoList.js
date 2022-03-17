import { ViewClass } from "./View";


class Todos extends ViewClass {
    clear() {
        document.querySelector(".todos").innerHTML = ""
    }

    render(todos) {
        let todoList = document.querySelector('.todos')
        for (let i of todos) {
            todoList.innerHTML += 
                `<div' class='todo'>
                    <div>${i.title}fsdfds</div>
                    <div id='${i.title}' class='todobuttons'>
                        <button class='edit'>edit</button>
                        <button class='delete'>delete</button>
                    </div>
                </div>`    
        }
    }
}

// function addDeleteButtonEventHandler(stateFunction, renderFunction) {
//     let deleteButtonArray = document.querySelectorAll(".delete");
//     for (let i of deleteButtonArray) {
//       i.addEventListener("click", function () {
//           swal({
//               title: "Are you sure?",
//               text: "Are you sure that you want to delete this todo?",
//               icon: "warning",
//               dangerMode: true,
//             })
//             .then(willDelete => {
//               if (willDelete) {
//                 swal("Deleted!", "Your todo has been deleted!", "success");
//                 console.log('testhiero')
//                 console.log(stateFunction)
//                 stateFunction(i.parentElement.id, renderFunction)
//               }
//             });
          
          
//       });
//     }
//   }

export default new Todos()