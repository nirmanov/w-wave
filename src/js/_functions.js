// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

const swiper1 = new Swiper('.swiper-one', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-one .swiper-pagination',
    clickable: true,
  },
});

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { validateForms } from './functions/validate-forms';
// // const rules1 = [...];

const rules1 = [
  {
    ruleSelector: '.about-form__email',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш e-mail',
      },
      {
        rule: 'required',
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ]
  },
  {
    ruleSelector: '.about-form__name',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?',
      },
      {
        rule: 'customRegexp',
        value: /^[a-zа-яё ]+$/i,
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'required',
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать как минимум 3 буквы',
      },
      {
        rule: 'required',
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Поле должно содержать максимум 30 букв',
      },
    ]
  },
  {
    ruleSelector: '.about-form__checkbox',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Поле обязательное для заполнения',
      }
    ]
  }
];


const afterForm = () => {
  // console.log('Произошла отправка, тут можно писать любые действия');
  document.querySelectorAll('.about-form__message').forEach(function (el) {
    el.classList.add('about-form__message-active');
  })
  setTimeout(function () {
    document.querySelectorAll('.about-form__message').forEach(function (el) {
      el.classList.remove('about-form__message-active');
    });
  }, 2000);
};

validateForms('.about-form', rules1, afterForm);
