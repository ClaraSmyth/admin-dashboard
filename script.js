const sbNavLink = document.querySelector('.sidebar-nav-link');
const sbText = document.querySelectorAll('.sidebar-text');
const width1000 = window.matchMedia('(min-width: 1000px)');
const mobileNavBtn = document.querySelector('.header-mobile-nav');
const sidebar = document.querySelector('.sidebar');

// Toggles the sidebar text on/off
sbNavLink.addEventListener('click', () => {
    sbText.forEach(text => {
        text.classList.toggle('display-none');
    });
});

// Turns the sidebar text off at smaller screen sizes by default
width1000.addEventListener('change', () => {
    sbText.forEach(text => {
        width1000.matches == true ? text.classList.remove('display-none') : text.classList.add('display-none');
    });
});

// Toggles sidebar on mobile screen size
mobileNavBtn.addEventListener('click', () => {
    sidebar.classList.toggle('display-none');
});