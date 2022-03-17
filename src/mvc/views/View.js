const app = document.getElementById("app")

export class ViewClass {
    parentView = app

    clear() {
        this.parentView.innerHTML = ""
    }

    render(userName, deleteFunction, editFunction) {
        let div = document.createElement("div");
        div.className = "overview"

        div.innerHTML = `
            <img class="logo" src="https://cdn-icons-png.flaticon.com/512/906/906334.png">
            <h1 class="usertitle">${userName}'s todo's</h1>
            <div>
                <h2>Add a todo</h2>
                <div class="addelements"></div>
            </div>
            <div>
                <h2>Your todos:</h2>
                <div class="todos"></div>
            </div>
        `
        this.parentView.prepend(div)
    }
}

export default new ViewClass()