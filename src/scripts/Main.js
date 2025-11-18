import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initSwiperPagination();
  }

  initSwiperPagination() {
    const target = document.querySelector('.js-swiper-page');
    if (target) {
      const swiper = new Swiper(target, {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },

          1024: {
            slidesPerView: 1,
            spaceBetween: 97,
          },
        },
      });
    }
  }
}

new Main();
