const openBtn = document.querySelector('#OpenBtn');
const navMenu = document.querySelector('.top-nav-menu');
const navLinks = document.querySelectorAll('.top-nav-link');


openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('navbtn-open');
    navMenu.classList.toggle('active');
})

navLinks.forEach(i =>
    i.addEventListener('click', () => {
        openBtn.classList.remove('navbtn-open');
        navMenu.classList.remove('active');
    })
)


