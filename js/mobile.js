(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__button-open'),
    closeMenuBtn: document.querySelector('.menu__button-close'),
    mobileMenu: document.querySelector('.mobile__menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();
