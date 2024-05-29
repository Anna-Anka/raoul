/* eslint-disable */

import Swiper, {
    Navigation,
} from 'swiper';

Swiper.use([Navigation]);

const BLACKOUT_LEFT = 'portfolio__wrapper--blackout-left'
const BLACKOUT_RIGHT = 'portfolio__wrapper--blackout-right'

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

            breakpoints: {
                767: {
                    slidesPerView: 2,
                },

                320: {
                    slidesPerView: 1,
                },
            },

            on: {
                init: function(swiper) {
                    const element = swiper.el
                    const wrapper = element.closest('.portfolio__wrapper')
                    if (wrapper) {
                        wrapper.classList.add(BLACKOUT_RIGHT)
                    }
                },
                slideChange: function(swiper) {
                    const wrapper = swiper.el.closest('.portfolio__wrapper')
                    if (wrapper) {
                        if (swiper.allowSlideNext) {
                            wrapper.classList.add(BLACKOUT_RIGHT)
                        } else {
                            wrapper.classList.remove(BLACKOUT_RIGHT)
                        }
                        if (swiper.allowSlidePrev) {
                            wrapper.classList.add(BLACKOUT_LEFT)
                        } else {
                            wrapper.classList.remove(BLACKOUT_LEFT)
                        }
                    }

                },
                lock: function(swiper) {
                    const element = swiper.el
                    const wrapper = element.closest('.portfolio__wrapper')
                    if (wrapper) {
                        wrapper.classList.add('portfolio__wrapper--margin')
                        wrapper.classList.remove(BLACKOUT_LEFT)
                        wrapper.classList.remove(BLACKOUT_RIGHT)
                    }
                },
            },
        });
    });
}
