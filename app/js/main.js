//mobile menu

if (document.querySelector('[data-menu="container"]')) {
    var wrapper = document.querySelector('[data-page="wrapper"]');
    var menuContainer = document.querySelector('[data-menu="container"]');
    var menuBtnOpen = document.querySelector('[data-menu="open"]');
    var menuSubstrate = document.querySelector('[data-menu="substrate"]');
    var menuBtnClose = document.querySelector('[data-menu="close"]');

    var menuOpen = function () {
        menuSubstrate.style.display = 'block';
        menuContainer.style.display = 'flex';

        setTimeout(function () {
            menuSubstrate.classList.add('active');
            menuContainer.classList.add('active');
        },10);
    };

    var menuClose = function () {
        menuSubstrate.classList.remove('active');
        menuContainer.classList.remove('active');

        setTimeout(function () {
            menuSubstrate.style.display = '';
            menuContainer.style.display = '';
        },250);
    };

    menuBtnOpen.addEventListener('click', menuOpen);
    menuBtnClose.addEventListener('click', menuClose);
}