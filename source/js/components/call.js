const callButton = document.body.querySelector('.js-call-popup');
const closeButton = document.body.querySelector('.popup__close');
const popup = document.body.querySelector('.popup');

const setPopupHandler = () => {
    callButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        popup.classList.remove('transparent');
        document.body.classList.add('dark');

        popup.addEventListener('click', (evt) => {
            evt.stopPropagation();
        });
    });

    closeButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.classList.add('transparent');
        document.body.classList.remove('dark');
    });

    document.body.addEventListener('click', (evt) => {        
        if(evt.target) {
            popup.classList.add('transparent');
            document.body.classList.remove('dark');
        }
    });
}

export {setPopupHandler}
