const buttons = document.querySelectorAll('.podcasts__card-player')

for (let button of buttons) {
  button.addEventListener("click", e => {
    let activeBtn = document.querySelector('button.pause')
    if (activeBtn && activeBtn !== e.target) {
      activeBtn.classList.remove('pause')
    }
    button.classList.toggle('pause')
  })
}

document.querySelector('.podcasts-btns__btn').addEventListener('click', function () {
  var elements = document.getElementsByClassName('podcasts__item');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcasts__item--active");
  }
});

document.querySelector('.podcasts-btns__btn').addEventListener('click', function () {
  document.querySelector('.podcasts-btns__btn').classList.toggle('podcasts-btns__btn--passive')
});