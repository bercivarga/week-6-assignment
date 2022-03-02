// This is the main store of my app

import { Todo } from "../helpers/Todo";

export const model = {
  user: {
    name: "Berci",
    avatar: "https://avatars.githubusercontent.com/u/65171545?v=4",
  },
  todos: [
    new Todo("Feed cat"),
    new Todo("Make assignment"),
    new Todo("Learn Rust"),
  ],
};
