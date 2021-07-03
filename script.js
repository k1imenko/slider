const upBtn = document.querySelector('.up-button'),
    downBtn = document.querySelector('.down-button'),
    container = document.querySelector('.container'),
    sidebar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    slidesCount = mainSlide.querySelectorAll('div').length; //с помощью этого выражения получаем количество всех div, это значение может быть динамическим. Чтобы посчитать количество слайдов мы обращаемся к блоку main-slide и смотрим на количество div(количество div это и есть наше количество слайдов.)

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; //с помощью этого выражения получаем количество слайдов, это значение может быть динамическим(меняющимся или заданно любое число)

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(+${activeSlideIndex * height}px)`;

}