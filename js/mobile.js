(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__button-open'),
    closeMenuBtn: document.querySelector('.menu__button-close'),
    modal: document.querySelector('.mobile__menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
