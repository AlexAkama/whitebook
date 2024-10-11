const spoilerButtons = document.querySelectorAll('.spoiler-button, .spoiler-string');

for (let button of spoilerButtons) {
    let spoiler;
    if (button.classList.contains("spoiler-button")) {
        spoiler = button.parentElement.nextElementSibling;
    } else if (button.classList.contains("spoiler-string")) {
        spoiler = button.nextElementSibling;
    } else {
        console.log("Нет класса спойлера: " + button)
        continue;
    }
    button.addEventListener('click', function () {
            if (spoiler.classList.contains('active')) {
                button.classList.remove('active');
                spoiler.classList.remove('active');
                spoiler.style.maxHeight = '0';
            } else {
                button.classList.add('active');
                spoiler.classList.add('active');
                spoiler.style.maxHeight = spoiler.scrollHeight + 5 + 'px';
            }
        }
    );
}