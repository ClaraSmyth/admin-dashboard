const sbNavLink = document.querySelector('.sidebar-nav-link');
const sbText = document.querySelectorAll('.sidebar-text');
const width1000 = window.matchMedia('(min-width: 1000px)');

width1000.addEventListener('change', () => {
    sbText.forEach(text => {
        text.classList.toggle('display-none');
    });
});

sbNavLink.addEventListener('click', () => {
    sbText.forEach(text => {
        text.classList.toggle('display-none');
    });
});
