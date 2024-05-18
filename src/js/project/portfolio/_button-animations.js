if (document.querySelector('.portfolio__button')) {
    const buttons = document.querySelectorAll('.portfolio__button');

    const stopAnimation = () => {
        buttons.forEach((button) => button.classList.add('portfolio__button--stop-animation'));
    };

    buttons.forEach((button) => {
        button.addEventListener('click', stopAnimation);
    });
}

if (document.querySelectorAll('.portfolio__wrapper')) {
    const swipersAll = document.querySelectorAll('.portfolio__wrapper');
    swipersAll.forEach((swiper) => {
        const etse = document.querySelectorAll('swiper-button-lock')
        console.log(etse);
        // const allButtons = swiper.querySelectorAll('.portfolio__button');
        // const arr = Array.from(allButtons);
        // console.log(arr);
        
        // const test = arr.filter((button) => button.classList.contains('swiper-button-lock'));

        // console.log(test);

        // if (lockButtons.length) {
        //     swiper.classList.add('portfolio__wrapper--margin');
        // }
    });
}
