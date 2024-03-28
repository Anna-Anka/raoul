import Swiper, {
    Navigation, Autoplay,
} from 'swiper';

Swiper.use([Navigation, Autoplay]);
if (document.querySelectorAll('.portfolio-card__swiper')) {
    const sliders = document.querySelectorAll('.portfolio-card__swiper')
    sliders.forEach(slider => {
        const swiperInstance = new Swiper(slider, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            // autoplay: {
            //     delay: 5000,
            //     pauseOnMouseEnter: true,
            //     disableOnInteraction: false
            // },

            navigation: {
                nextEl: slider.querySelector('.portfolio-card__button--next'),
                prevEl: slider.querySelector('.portfolio-card__button--prev'),
            },
        });

        // slider.addEventListener('mouseenter', () => {
        //     swiperInstance.autoplay.stop();
        // });

        // slider.addEventListener('mouseleave', () => {
        //     swiperInstance.autoplay.start();
        // });
    });
}
