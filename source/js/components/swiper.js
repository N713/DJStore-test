import Swiper from 'swiper';

const setSwiper = () => {
    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
        effect: 'fade',
        speed: 500,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper1 = new Swiper('.swiper-container-1', {
        loop: false,
        width: 344,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export {setSwiper}
