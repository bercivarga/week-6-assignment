const app = document.getElementById("app");

export class ViewClass {
  parentEl = app;

  clear() {
    parentEl.innerHtml = "";
  }

  render(user) {
    const div = document.createElement("div");
    div.className = "main-view";

    div.innerHTML = `
        <img class="banner" src=${user.banner} alt="${user.name}'s banner"">
        <h2>Welcome back, ${user.name}!</h2>
        <p>Here are your todos for today</p>
        <div class="todo-list"></div>
    `;

    this.parentEl.prepend(div);
  }
}

export default new ViewClass();
