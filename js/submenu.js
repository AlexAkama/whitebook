const total = document.querySelector('.submenu-total');

const searchBox = document.querySelector('.search-box')
const search = document.querySelector('#search')

const buttons = document.querySelectorAll('.submenu-button');
const submenus = document.querySelectorAll('.submenu');
const elements = document.querySelectorAll('.menu>li');

for (let button of buttons) {
    button.addEventListener('click', function () {
            let submenu = button.parentElement.nextElementSibling;
            if (submenu.classList.contains('active')) {
                button.classList.remove('active');
                submenu.classList.remove('active');
                submenu.classList.add('no-display');
            } else {
                button.classList.add('active');
                submenu.classList.add('active');
                submenu.classList.remove('no-display');
            }
        }
    );
}

total.addEventListener('click', function () {
    if (total.classList.contains('active')) {
        total.classList.remove('active');
        total.textContent = '(показать все)';
        for (let button of buttons) {
            button.classList.remove('active');
            button.parentElement.nextElementSibling.classList.remove('active');
            button.parentElement.nextElementSibling.classList.add('no-display');
        }
    } else {
        total.classList.add('active');
        total.textContent = '(скрыть все)';
        for (let button of buttons) {
            button.classList.add('active');
            button.parentElement.nextElementSibling.classList.add('active');
            button.parentElement.nextElementSibling.classList.remove('no-display');
        }
    }
})

search.addEventListener('change', function () {
    let needle = search.value.toLowerCase();
    if (needle !== '') {
        for (let button of buttons) {
            button.classList.add('active');
            button.parentElement.nextElementSibling.classList.add('active');
            button.parentElement.nextElementSibling.classList.remove('no-display');
            button.classList.add('no-display');
        }
        for (let element of elements) {
            element.classList.remove('no-display');
            if (!element.innerHTML.toLowerCase().includes(needle)) {
                element.classList.add('no-display');
            } else {
                console.log(element);
            }
        }
        total.classList.add('no-display');
        searchBox.classList.add('icon-cancel');
    } else {
        for (let button of buttons) {
            button.classList.remove('active');
            button.parentElement.nextElementSibling.classList.remove('active');
            button.classList.remove('no-display');
        }
        for (let submenu of submenus) {
            submenu.classList.add('no-display');
        }
        for (let element of elements) {
            element.classList.remove('no-display');
        }
        total.classList.remove('no-display');
        searchBox.classList.remove('icon-cancel');
    }

})

