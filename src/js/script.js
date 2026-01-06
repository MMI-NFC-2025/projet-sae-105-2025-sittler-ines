const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--open');
    menu.classList.toggle('menu--open');
  });
} else {
  console.error('Burger ou menu introuvable');
}
