const UPLOAD_URL = 'https://somelink.com/';
const form = document.body.querySelector('form');
const submit = form.querySelector('button[type="submit"]');
const checkbox = form.querySelector('input[type="checkbox"]');
const inputs = form.querySelectorAll('input');
const popup = document.body.querySelector('.popup');

const showMessage = (element) => {
    element.querySelector('form').classList.add('none');
    element.querySelector('h2').textContent = 'Спасибо!';
    element.querySelector('p').textContent = 'Мы свяжемся с Вами в ближайшее время.';
}

const setFormHadler = () => {

    checkbox.addEventListener('change', (evt) => {
        evt.preventDefault();

        if (!checkbox.checked) {
            submit.setAttribute('disabled', '');
        } else {
            submit.removeAttribute('disabled');
        }
    });

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const data = new FormData();

        data.append('name', inputs[0].value);
        data.append('phone', inputs[1].value);

        var xhr = new XMLHttpRequest();

        // В данном случае используется функция showMessage() вне зависимости от результата т.к нет url
         
        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                showMessage(popup);
            } else {
                showMessage(popup);
            }
        });

        xhr.addEventListener('error', function () {
            showMessage(popup);
        });

        xhr.open('POST', UPLOAD_URL);
        xhr.send(data);
    });
}

export { setFormHadler }
