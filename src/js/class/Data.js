/* eslint-disable max-len */
export default class Data {
  constructor(elem) {
    this.name = elem.name;
    this.list = elem.list;
  }

  remove(elem) {
    const del = this.list.find((item) => item.id === Number(elem.getAttribute('data')));
    this.list.splice(del.id - 1, 1);
  }

  check(elem) {
    this.list.find((item) => item.id === elem).result = !this.list.find((item) => item.id === elem).result;
  }

  addElem(elem) {
    const newTodo = {};
    newTodo.id = this.list.length + 1;
    newTodo.value = elem;
    newTodo.result = false;
    this.list.push(newTodo);
  }
}
