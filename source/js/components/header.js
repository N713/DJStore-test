const header = document.body.querySelector('.header');
const navigation = document.body.querySelector('.navigation');
let lastScrollTop = 0;

const showStickyHeader = () => {
    let top = window.pageYOffset;

    if (navigation.classList.contains('none')) {
        if (lastScrollTop > top) {
            header.classList.add('sticky');
            header.classList.remove('opacity');
        } else if (lastScrollTop < top) {
            header.classList.remove('sticky')
            header.classList.add('opacity');
        }
    }

    lastScrollTop = top;
}

const setStickyHeader = () => {
    document.addEventListener('scroll', showStickyHeader);
    document.addEventListener('touchmove', showStickyHeader);

    if (window.matchMedia("(min-width: 1200px)").matches) {
        navigation.classList.remove('none');
    }
}

export { setStickyHeader }
