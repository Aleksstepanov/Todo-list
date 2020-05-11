/* eslint-disable no-undef */
/* eslint-disable import/newline-after-import */
const render = {
  name(elem) {
    document.querySelector('.todo__value').value = elem;
  },
  list(elem) {
    const item = `
                <label class="mdl-checkbox mdl-js-checkbox" for="checkbox-${elem.id}">
                  <input type="checkbox" id="checkbox-${elem.id}" class="mdl-checkbox__input todo__check" data='${elem.id}'>
                  <span class="item__title mdl-checkbox__label" data='${elem.id}'>${elem.value}</span>
                </label>
                <button class="mdl-button mdl-js-button mdl-button--icon" data='${elem.id}'>
                  <img src="/assets/img/delete_sweep-black-18dp.svg", width="18px" height="18px" alt="delete">
                </button>
              `;
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = item;
    document.querySelector('.todo__list').append(li);
    componentHandler.upgradeAllRegistered();
    document.querySelector('#sample3').value = '';
  },
  check(elem) {
    const dataAtr = String(elem.getAttribute('data'));
    return elem.checked ? document.querySelector(`.item__title[data="${dataAtr}"]`).classList.add('item__title-result') : document.querySelector(`.item__title[data="${dataAtr}"]`).classList.remove('item__title-result');
  },
  remove(elem) {
    elem.parentNode.remove();
  },
};
export default render;
