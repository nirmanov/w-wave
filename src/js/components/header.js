document.querySelector('.bottom-btns__btn-players-archive').addEventListener('click', function () {
  document.querySelector('.bottom-btns__btn-players-archive .passive').classList.toggle('btn-active')
});

document.querySelector('.bottom-btns__btn-players-ether').addEventListener('click', function () {
  document.querySelector('.bottom-btns__btn-players-ether .passive').classList.toggle('btn-active')
});

document.querySelector('.header-bottom__btns-mobil').addEventListener('click', function () {
  document.querySelector('.bottom-btns').classList.toggle('header-bottom__btns_active')
  document.querySelector('.header-bottom__btns-mobil').classList.toggle('header-bottom__btns-mobil_active')
  document.querySelector('.header__bottom').classList.toggle('header__bottom_active')
});