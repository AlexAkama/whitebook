// на все кнопки подменю
const submenuButtons = document.querySelectorAll('.submenu-button');
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
const toggleMenuVisibilityButton = document.querySelector('.submenu-total');
if (toggleMenuVisibilityButton) {
    toggleMenuVisibilityButton.textContent = '(показать все)';
    toggleMenuVisibilityButton.addEventListener('click', function () {
        if (toggleMenuVisibilityButton.classList.contains('active')) {
            toggleMenuVisibilityButton.classList.remove('active');
            toggleMenuVisibilityButton.textContent = '(показать все)';
            for (let button of submenuButtons) {
                button.classList.remove('active');
                button.parentElement.nextElementSibling.classList.remove('active');
                button.parentElement.nextElementSibling.classList.add('no-display');
            }
        } else {
            toggleMenuVisibilityButton.classList.add('active');
            toggleMenuVisibilityButton.textContent = '(скрыть все)';
            for (let button of submenuButtons) {
                button.classList.add('active');
                button.parentElement.nextElementSibling.classList.add('active');
                button.parentElement.nextElementSibling.classList.remove('no-display');
            }
        }
    })
}
