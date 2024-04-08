export * from './_portfolio-swiper';
export * from './_portfolio-card-swiper';
import { resizableSwiper } from './_experience-swiper';

resizableSwiper('(max-width: 992px)', '.experience .tabs__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.experience__button--next',
        prevEl: '.experience__button--prev',
    },
});
