/* eslint-disable no-undef */
import TodoList from '../class/Data';

const Model = new TodoList({
  name: 'My Todo List',
  list: [
    {
      id: 1,
      value: 'go in bathroom',
      result: false,
    },
  ],
});
export default Model;
