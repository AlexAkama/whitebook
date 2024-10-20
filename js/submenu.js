const submenuButtons = document.querySelectorAll('.submenu-button');

const toggleVisibilityButtons = document.querySelector('.submenu-total');
toggleVisibilityButtons.textContent = '(показать все)';

// на все кнопки подменю
for (let button of submenuButtons) {
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

// на кнопку показать/скрыть все
toggleVisibilityButtons.addEventListener('click', function () {
    if (toggleVisibilityButtons.classList.contains('active')) {
        toggleVisibilityButtons.classList.remove('active');
        toggleVisibilityButtons.textContent = '(показать все)';
        for (let button of submenuButtons) {
            button.classList.remove('active');
            button.parentElement.nextElementSibling.classList.remove('active');
            button.parentElement.nextElementSibling.classList.add('no-display');
        }
    } else {
        toggleVisibilityButtons.classList.add('active');
        toggleVisibilityButtons.textContent = '(скрыть все)';
        for (let button of submenuButtons) {
            button.classList.add('active');
            button.parentElement.nextElementSibling.classList.add('active');
            button.parentElement.nextElementSibling.classList.remove('no-display');
        }
    }
})
