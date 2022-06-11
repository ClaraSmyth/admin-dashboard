const sbNavLink = document.querySelector('.sidebar-nav-link');
const sbText = document.querySelectorAll('.sidebar-text');

sbNavLink.addEventListener('click', () => {
    sbText.forEach(text => {
        text.classList.toggle('display-none');
    });
});
