import Swiper, {
    Navigation, Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);
if (document.querySelectorAll('.portfolio-card__swiper')) {
    const sliders = document.querySelectorAll('.portfolio-card__swiper')
    sliders.forEach(slider => {
        new Swiper(slider, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,


            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        });
    });
}
