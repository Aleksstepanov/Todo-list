/* eslint-disable spaced-comment */
import Model from './model';
import Todo from '../class/Todo';
import render from './view';

const Todos = new Todo({
  createName: document.querySelector('.button-todoName'),
  add: document.querySelector('.btn__Add'),
});

Todos.createName.addEventListener('click', () => {
  Model.name = prompt('Create Todo List', Model.name);
  render.name(Model.name);
});

Todos.add.addEventListener('click', () => {
  const itemList = document.querySelector('#sample3');
  render.list(itemList.value);
});
