window.addEventListener('load', function () {
  document.body.style.overflow = 'hidden';

  const loader = document.querySelector('#loader');
  const content = document.querySelector('#content');

  setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = '';
  }, 500);
});
