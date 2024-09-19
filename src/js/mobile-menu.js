import { openModalAction } from './utils/modalActions';

const modal = document.querySelector('#menu');
const openModalBtn = document.querySelector('#open-menu');

openModalAction(openModalBtn, modal);

modal.addEventListener('click', event => {
  if (event.target != event.currentTarget) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
