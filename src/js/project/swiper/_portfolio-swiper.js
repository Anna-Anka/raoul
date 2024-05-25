import Swiper, {
    Navigation,
} from 'swiper';

Swiper.use([Navigation]);

if (document.querySelectorAll('.portfolio__swiper')) {
    const sliders = document.querySelectorAll('.portfolio__swiper');
    sliders.forEach((slider) => {
        new Swiper(slider, {
            allowTouchMove: false,
            navigation: {
                nextEl: slider.querySelector('.portfolio__button--next'),
                prevEl: slider.querySelector('.portfolio__button--prev'),
            },

            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: true,

            breakpoints: {
                767: {
                    slidesPerView: 2,
                },

                320: {
                    slidesPerView: 1,
                },
            },

            on: {
                lock: function() {
                    const swiper = this.el
                    const wrapper = swiper.closest('.portfolio__wrapper')
                    wrapper && wrapper.classList.add('portfolio__wrapper--margin')
                }
            }
        });
    });
}
