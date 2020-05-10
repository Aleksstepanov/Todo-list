/* eslint-disable no-undef */
/* eslint-disable import/newline-after-import */
const render = {
  name(elem) {
    document.querySelector('.todo__value').value = elem;
  },
  list(elem) {
    const listItem = document.querySelectorAll('li').length + 1;
    const item = `
                <label class="mdl-checkbox mdl-js-checkbox" for="checkbox-${listItem}">
                  <input type="checkbox" id="checkbox-${listItem}" class="mdl-checkbox__input">
                  <span class="item__title mdl-checkbox__label">${elem}</span>
                </label>
                <button class="mdl-button mdl-js-button mdl-button--icon">
                  <img src="/assets/img/delete_sweep-black-18dp.svg", width="18px" height="18px" alt="delete">
                </button>
              `;
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = item;
    document.querySelector('.todo__list').append(li);
    componentHandler.upgradeAllRegistered();
  },
};
export default render;
