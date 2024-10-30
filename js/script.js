"use strict"

let menu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');
menu.addEventListener('click', function () {
   menu.classList.toggle('active');
   menuBody.classList.toggle('active');
});

const swiper2 = new Swiper('.latest-articles__slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 3,
   paginationclickable: "true",
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      710: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   }

});

const swiper1 = new Swiper('.products__slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 3,
   paginationclickable: "true",
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      510: {
         slidesPerView: 2,
      },
      790: {
         slidesPerView: 3,
      }
   }

});




let list = document.querySelector('.catalog__list');
let tabitems =  list.querySelectorAll('.catalog__item');
let tabsbody = document.querySelectorAll('.tabs-body');

for (let i = 0; i < tabitems.length; i++){
   tabitems[i].addEventListener('click', function () {
      let tabact = document.querySelector('.tabactive');
      tabact.classList.remove('tabactive');

      let tabbodyact = document.querySelector('.tabs-body__active')
      tabbodyact.classList.remove('tabs-body__active');

      tabsbody[i].classList.add('tabs-body__active');
      this.classList.add('tabactive');
   });
}

