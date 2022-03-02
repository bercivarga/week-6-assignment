export class Todo {
  id = String(Date.now() * Math.random())

  constructor(name) {
    this.name = name;
  }
}