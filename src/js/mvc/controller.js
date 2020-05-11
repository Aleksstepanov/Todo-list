/* eslint-disable consistent-return */
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
  save: document.querySelector('.btn__Save'),
});

Todos.createName.addEventListener('click', () => {
  Model.name = prompt('Create Todo List', Model.name);
  render.name(Model.name);
});

Todos.add.addEventListener('click', () => {
  const itemList = document.querySelector('#sample3');
  Model.addElem(itemList.value);
  render.list(Model.list[Model.list.length - 1]);
});
document.querySelector('.todo__list').addEventListener('click', (event) => {
  const check = event.target.closest('input'); //повесим событие на весь список
  if (!check) return; //найдем клики по чекбоксам
  Model.check(Number(check.getAttribute('data')));//Передалдим информацию в Model
  render.check(check); //отрисуем результат
});
document.querySelector('.todo__list').addEventListener('click', (event) => {
  const button = event.target.closest('button');//повесим событие на список и найдем клики по корзине
  if (!button) return;
  Model.remove(button);
  render.remove(button);
});
Todos.save.addEventListener('click', () => {
  console.log(Model.list);
});
