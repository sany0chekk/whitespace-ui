const modal = document.querySelector('#menu');
const openModalBtn = document.querySelector('#open-menu');

openModalBtn.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  modal.classList.add('active');
});

modal.addEventListener('click', event => {
  if (event.target != event.currentTarget) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
