const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.close');

hamburger.addEventListener('click', function () {
    menu.classList.add('menu_active');
});

close.addEventListener('click', function () {
    menu.classList.remove('menu_active');
});

//persents 
const persent = document.querySelectorAll('.skill-rate__wrapper-percent'),
      fill = document.querySelectorAll('.skill-rate__wrapper-diag div');

persent.forEach((item, i) => {
    fill[i].style.width = item.innerHTML;
});



