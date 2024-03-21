import Swiper, {
    Navigation, Pagination, Autoplay
} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);
if (document.querySelectorAll('.portfolio-card__swiper')) {
    const sliders = document.querySelectorAll('.portfolio-card__swiper')
    sliders.forEach(slider => {
        const swiperInstance = new Swiper(slider, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            autoplay: {
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
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
