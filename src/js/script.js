/* ===============================
   MENU BURGER
   =============================== */

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    burger.classList.toggle('burger--open');
  });
} else {
  console.error('Burger ou menu introuvable');
}

/* ===============================
   CAROUSEL
   =============================== */

const list = document.querySelector('.projects-carousel__list');
const prevBtn = document.querySelector('.projects-carousel__btn--prev');
const nextBtn = document.querySelector('.projects-carousel__btn--next');

let index = 0;

if (list && prevBtn && nextBtn) {
  const items = document.querySelectorAll('.projects-carousel__item');
  const itemStyle = getComputedStyle(items[0]);
  const itemWidth =
    items[0].offsetWidth +
    parseInt(itemStyle.marginRight || 0);

  const maxIndex = items.length - 1;

  nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
      index++;
      list.style.transform = `translateX(-${index * itemWidth}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      list.style.transform = `translateX(-${index * itemWidth}px)`;
    }
  });
}
