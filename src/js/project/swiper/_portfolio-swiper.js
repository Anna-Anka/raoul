import Swiper, {
    Navigation,
} from 'swiper';

Swiper.use([Navigation]);

if (document.querySelector('.portfolio__button')) {
    const buttons = document.querySelectorAll('.portfolio__button');

    const stopAnimation = () => {
        buttons.forEach((button) => button.classList.add('portfolio__button--stop-animation'));
    };

    buttons.forEach((button) => {
        button.addEventListener('click', stopAnimation);
    });
}

if (document.querySelectorAll('.portfolio__swiper')) {
    const sliders = document.querySelectorAll('.portfolio__swiper');
    sliders.forEach((slider) => {
        new Swiper(slider, {
            allowTouchMove: false,
            navigation: {
                nextEl: slider.querySelector('.portfolio__button--next'),
                prevEl: slider.querySelector('.portfolio__button--prev'),
            },

            breakpoints: {
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },

                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },
            },
        });
    });
}
