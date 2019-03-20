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

//slider jury detail

(function () {
    var self = this;
    self.sliderJuryImg = null;
    self.sliderJuryInfo = null;

    if (document.querySelector('[data-slider="img"]') && document.querySelector('[data-slider="info"]')) {
        self.sliderJuryImg = new Swiper('[data-slider="img"]', {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 2,
            slidesPerView: 1,
        });


        self.sliderJuryInfo = new Swiper('[data-slider="info"]', {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            loopedSlides: 2,

            navigation: {
                nextEl: '[data-slider="btn-next"]',
                prevEl: '[data-slider="btn-prev"]'
            }
        });

        self.sliderJuryImg.controller.control = self.sliderJuryInfo;
        self.sliderJuryInfo.controller.control = self.sliderJuryImg;
    }
})();


//slider jury detail

if (document.querySelector('[data-slider="premium-photo-gallery"]')) {
    var premiumPhotoGallery = new Swiper('[data-slider="premium-photo-gallery"]', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,

        navigation: {
            nextEl: '[data-slider="btn-photo-gallery-next"]',
            prevEl: '[data-slider="btn-photo-gallery-prev"]'
        }
    });
}

