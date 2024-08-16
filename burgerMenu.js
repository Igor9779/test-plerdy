const burgerIcon = document.querySelector('.burger-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.close-nav');

burgerIcon.addEventListener('click', () => {
    mobileNav.classList.add('open');
});

closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});
