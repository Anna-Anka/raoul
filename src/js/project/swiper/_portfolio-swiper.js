import Swiper, {
    Navigation,
} from 'swiper';

Swiper.use([Navigation]);

if (document.querySelectorAll('.portfolio__swiper')) {
    const sliders = document.querySelectorAll('.portfolio__swiper');
    sliders.forEach(slider => {
        new Swiper(slider, {

            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,

            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev'),
            },

            // breakpoints: {
            //     577: {
            //         slidesPerView: 'auto',
            //         spaceBetween: 40,
            //     },

            //     320: {
            //         slidesPerView: 1,
            //         slidesPerGroup: 1,
            //         spaceBetween: 20,
            //     }
            // }
        });
    });
}
