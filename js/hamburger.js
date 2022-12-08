const menu = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function (e) {
    e.preventDefault();

    menu.classList.toggle('menu--active');
    hamburger.classList.toggle('hamburger--active');
});