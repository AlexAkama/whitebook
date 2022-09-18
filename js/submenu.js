const buttons = document.querySelectorAll('.submenu-button');
const total = document.querySelector('.submenu-total');
const search = document.querySelector('#search')
const searchBox = document.querySelector('.search-box')
const elements = document.querySelectorAll('.submenu>li');

for (let button of buttons) {
    button.addEventListener('click', function () {
            let submenu = button.parentElement.nextElementSibling;
            if (submenu.classList.contains('active')) {
                button.classList.remove('active');
                submenu.classList.remove('active');
            } else {
                button.classList.add('active');
                submenu.classList.add('active');
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
        }
    } else {
        total.classList.add('active');
        total.textContent = '(скрыть все)';
        for (let button of buttons) {
            button.classList.add('active');
            button.parentElement.nextElementSibling.classList.add('active');
        }
    }
})

search.addEventListener('change', function () {
    let needle = search.value.toLowerCase();
    if (needle !== '') {
        total.style.display = 'none';
        for (let button of buttons) {
            button.classList.add('active');
            button.parentElement.nextElementSibling.classList.add('active');
            button.style.display = 'none';
        }
        for (let element of elements) {
            if (!element.innerHTML.toLowerCase().includes(needle)) {
                element.style.display = 'none';
            } else {
                element.style.display = 'inline-block';
            }
        }
        searchBox.classList.add('icon-cancel');
    } else {
        total.style.display = 'inline-block';
        for (let button of buttons) {
            button.classList.remove('active');
            button.parentElement.nextElementSibling.classList.remove('active');
            button.style.display = 'inline-block';
        }
        for (let element of elements) {
            element.style.display = 'block';
        }
        searchBox.classList.remove('icon-cancel');
    }

})

