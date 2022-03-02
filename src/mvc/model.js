// This is the main store of my app

import { Todo } from "../helpers/Todo";

export const model = {
  user: {
    name: "Berci",
    banner: "https://media.istockphoto.com/vectors/to-do-list-banner-template-to-do-list-ribbon-label-sign-vector-id1218393780?k=20&m=1218393780&s=170667a&w=0&h=Px_6IX2YTcIoSEK6gJmYG7oX_405rypw3C6_hJ7kx0Y=",
  },
  todos: [
    new Todo("Feed cat"),
    new Todo("Make assignment"),
    new Todo("Learn Rust"),
  ],
};
