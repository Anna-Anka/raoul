import Swiper, {
    Navigation, Autoplay,
} from 'swiper';

const videos = document.querySelectorAll('.video');

// generate video url
const generateUrl = (id) => {
    const query = `?rel=0&showinfo=0&playlist=${id}&autoplay=1&mute=1&loop=1`;

    return `https://www.youtube.com/embed/${id}${query}`;
};

// creating iframe
const createIframe = (id) => {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('src', generateUrl(id));

    return iframe;
};

const startVideo = (element, videoId) => {
    const iframe = createIframe(videoId);
    element.querySelector('img').remove();
    element.appendChild(iframe);
    element.querySelector('button').remove();
};

const prepareVideo = (element, byClick) => {
    const videoHref = element.getAttribute('data-video');

    const deletedLength = 'https://youtu.be/'.length;

    const videoId = videoHref.substring(deletedLength, videoHref.length);

    const img = element.querySelector('img');
    const youtubeImgSrc = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

    if (img) img.setAttribute('src', youtubeImgSrc);

    if (byClick) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            startVideo(element, videoId);
        });
    } else {
        startVideo(element, videoId);
    }
};

// main code
videos.forEach((el) => {
    prepareVideo(el, true);
});

const initSliderVideo = (swiper) => {
    const indexCurrentSlide = swiper.realIndex;
    const allSlides = swiper.slides;
    const currentSlide = allSlides[indexCurrentSlide];

    allSlides.forEach((slide) => {
        const video = slide.querySelector('.video');
        if (video) {
            const iframe = video.querySelector('iframe');
            if (iframe) {
                iframe.remove();
                video.innerHTML = '<img src="" alt="video"><button class="video__play" aria-label="play video"></button>';
            }
        }
    });

    const video = currentSlide?.querySelector('.video');

    if (video) {
        prepareVideo(video, false);
    }
};

const initSwiper = () => {
    const sliders = document.querySelectorAll('.portfolio .tabs__panel--active .portfolio-card__swiper');
    sliders.forEach((slider) => {
        const swiperInstance = new Swiper(slider, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,

            autoplay: {
                enabled: false,
            },

            navigation: {
                nextEl: slider.querySelector('.portfolio-card__button--next'),
                prevEl: slider.querySelector('.portfolio-card__button--prev'),
            },

            breakpoints: {
                1024: {
                    autoplay: {
                        enabled: true,
                        delay: 5000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                    },
                }
            },

            on: {
                init: function () {
                    initSliderVideo(this);
                },

                slideChange: function () {
                    initSliderVideo(this);
                },
            },
        });

        slider.addEventListener('mouseenter', () => {
            swiperInstance.autoplay.stop();
        });
    });
}

if (document.querySelector('.portfolio .tabs__nav-btn')) {
    const blockPortfolio = document.querySelector('.portfolio');
    const allButtonTabs = blockPortfolio.querySelectorAll('.tabs__nav-btn');

    const onClickHandler = () => {
        initSwiper()
    }

    allButtonTabs.forEach((button) => {
        button.addEventListener('click', onClickHandler)
    })
}

Swiper.use([Navigation, Autoplay]);
if (document.querySelectorAll('.portfolio-card__swiper')) {
    initSwiper();
}
