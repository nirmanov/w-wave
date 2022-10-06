document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('burger--active')
  document.querySelector('.header__nav').classList.toggle('header__nav_active')
  document.querySelector('.header').classList.toggle('header-active')
  document.querySelector('.header-bottom__nav').classList.toggle('header-bottom__nav_active')
});