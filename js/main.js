window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const menu_ani = document.querySelector('.mobileNav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('isActive');
        menu_ani.classList.toggle('isActive');
    });
}