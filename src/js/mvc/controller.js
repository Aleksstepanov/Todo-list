/* eslint-disable no-useless-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable spaced-comment */
import Model from './model';
import Todo from '../class/Todo';
import render from './view';

const Todos = new Todo({
  createName: document.querySelector('.button-todoName'),
  add: document.querySelector('.btn__Add'),
  check: document.querySelectorAll('.todo__check'),
});

Todos.createName.addEventListener('click', () => {
  Model.name = prompt('Create Todo List', Model.name);
  render.name(Model.name);
});

Todos.add.addEventListener('click', () => {
  const newTodo = {}; //новый элемент списка
  const itemList = document.querySelector('#sample3'); //значение нового элемента из ипута
  newTodo.id = Model.list.length + 1;
  newTodo.value = itemList.value;
  newTodo.result = false; //создадим новый элемент объекта
  Model.list.push(newTodo); //отправим вновь созданный элемент в модель
  render.list(newTodo); //отрисуем новый элемент
});
document.querySelector('.todo__list').addEventListener('click', (event) => {
  const check = event.target.closest('input');
  if (!check) return;
  const checked = Model.list.find((item) => item.id === Number(check.getAttribute('data')));
  checked.result = !checked.result;
  render.check(checked);
});
