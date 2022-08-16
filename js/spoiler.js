const buttons = document.querySelectorAll('.spoiler-button');

for (let button of buttons) {
    button.addEventListener('click', function () {
            let spoiler = button.parentElement.nextElementSibling;
            console.log(spoiler);
            if (spoiler.classList.contains('active')) {
                button.classList.remove('active');
                spoiler.classList.remove('active');
                spoiler.style.maxHeight = '0';
            } else {
                button.classList.add('active');
                spoiler.classList.add('active');
                spoiler.style.maxHeight = spoiler.scrollHeight + 'px';
            }
        }
    );
}