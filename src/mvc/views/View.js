const app = document.getElementById("app");

export class ViewClass {
  parentEl = app;

  clear() {
    parentEl.innerHtml = "";
  }

  render(name) {
    const div = document.createElement("div");
    div.className = "main-view";

    div.innerHTML = `
        <h2>Welcome back, ${name}!</h2>
        <h3>Here are your todos for today</h3>
        <div class="todo-list"></div>
    `;

    this.parentEl.prepend(div);
  }
}

export default new ViewClass();
