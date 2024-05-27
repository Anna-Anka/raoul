if (document.querySelector('.portfolio__button')) {
    const buttons = document.querySelectorAll('.portfolio__button');

    const stopAnimation = () => {
        buttons.forEach((button) => button.classList.add('portfolio__button--stop-animation'));
    };

    buttons.forEach((button) => {
        button.addEventListener('click', stopAnimation);
    });
}
