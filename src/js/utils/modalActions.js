export const openModalAction = (trigger, modal) => {
  trigger.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    modal.classList.add('active');
  });
};

export const closeModalAction = (trigger, modal, dialog, callback) => {
  modal.addEventListener('click', event => {
    if (!dialog.contains(event.target)) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      if (callback) {
        callback();
      }
    }
  });

  if (trigger) {
    trigger.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      if (callback) {
        callback();
      }
    });
  }
};
