const searchBox = document.querySelector('.search-box')
const search = document.querySelector('#search')
const submenus = document.querySelectorAll('.submenu');
const elements = document.querySelectorAll('.menu>li');

search.addEventListener('change', function () {
    let needle = search.value.toLowerCase();
    if (needle !== '') {
        for (let button of submenuButtons) {
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
        toggleMenuVisibilityButton.classList.add('no-display');
        searchBox.classList.add('icon-cancel');
    } else {
        for (let button of submenuButtons) {
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
        toggleMenuVisibilityButton.classList.remove('no-display');
        searchBox.classList.remove('icon-cancel');
    }

})