/* eslint-disable no-undef */
import TodoList from '../class/Data';

const Model = new TodoList({
  name: 'My Todo List',
  list: [
    {
      value: '',
      result: false,
    },
  ],
});
export default Model;
