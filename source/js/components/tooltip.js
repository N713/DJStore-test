const tooltip = document.body.querySelector('.tooltip__point');
const tooltipClose = document.body.querySelector('.tooltip__close');
const tooltipWindow = document.body.querySelector('.tooltip__info');
const tooltipWhole = document.body.querySelector('.tooltip');

const showTooltip = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    tooltipWindow.classList.toggle('transparent');
}

const setTooltipHandler = () => {
    tooltip.addEventListener('click', (evt) => {
        showTooltip(evt);
    });

    tooltipClose.addEventListener('click', (evt) => {
        showTooltip(evt);
    });

    document.body.addEventListener('click', (evt) => {
        tooltipWhole.addEventListener('click', (evt) => {
            evt.stopPropagation();
        });

        if(evt.target) {
            tooltipWindow.classList.add('transparent');
        }
    });
}

export {setTooltipHandler}
