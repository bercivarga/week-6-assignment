const app = document.getElementById('app');

class View {
  parentEl = app

  clear() {
    parentEl.innerHtml = ''
  }

  render(name) {
    console.log('hello')
    const div = document.createElement('div')
    div.classList.add('main-view')
    div.innerHTML = `
        <h2>Welcome back, ${name}!</h2>
        <h3>Here are your todos for today</h3>
    `
    this.parentEl.prepend(div)
  }
}

export default new View()