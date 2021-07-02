const burger = document.body.querySelector('.burger');

const setBurgerHandler = () => {
    burger.addEventListener('click', (evt) => {
        evt.preventDefault();

        burger.classList.toggle('opened');
        
        const navigation = document.body.querySelector('.navigation');
        navigation.classList.toggle('none');
    });
}

export {setBurgerHandler}
