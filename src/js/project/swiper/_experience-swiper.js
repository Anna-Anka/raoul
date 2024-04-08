/* eslint-disable no-inner-declarations */
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

export const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
            callback(swiper);
        }
    };

    const checker = function () {
        if (breakpoint.matches) {
            return enableSwiper(swiperClass, swiperSettings);
        } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
        }
    };

    breakpoint.addEventListener('change', checker);
    checker();
};

const someFunc = (instance) => {
    if (instance) {
        instance.on('slideChange', function (e) {
            console.log('*** mySwiper.activeIndex', instance.activeIndex);
        });
    }
};


// if (document.querySelector('.experience .tabs__swiper')) {
//     const slider = document.querySelector('.experience .tabs__swiper');
//     let mySwiper;

//     function mobileSlider() {
//         if (window.innerWidth <= 992 && slider.dataset.mobile === 'false') {
//             console.log('a');
//             mySwiper = new Swiper(slider, {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//                 loop: true,
//                 navigation: {
//                     nextEl: '.experience__button--next',
//                     prevEl: '.experience__button--prev',
//                 },
//             });

//             slider.dataset.mobile = 'true';
//         }

//         if (window.innerWidth > 992) {
//             slider.dataset.mobile = 'false';
//             if (slider.classList.contains('swiper-container-initialized')) {
//                 mySwiper.destroy();
//             }
//         }
//     }

//     mobileSlider();

//     window.addEventListener('resize', () => {
//         mobileSlider();
//     });
// }
