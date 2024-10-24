const spoilerOpenActionText = '(раскрыть все)'
const spoilerCloseActionText = '(закрыть все)'
const toggleSpoilerVisibilityButton = document.querySelector('.spoiler-total');
toggleSpoilerVisibilityButton.textContent = spoilerOpenActionText;

const spoilerButtons = document.querySelectorAll('.spoiler-button, .spoiler-string');

function getSpoilerElement(spoilerButton) {
    if (spoilerButton.classList.contains("spoiler-spoilerButton")) {
        return spoilerButton.parentElement.nextElementSibling;
    } else if (spoilerButton.classList.contains("spoiler-string")) {
        return spoilerButton.nextElementSibling;
    } else {
        console.log("Нет класса спойлера: " + spoilerButton);
        return null;
    }
}

function openSpoiler(spoilerButton, spoiler) {
    spoilerButton.classList.add('active');
    spoiler.classList.add('active');
    spoiler.style.maxHeight = spoiler.scrollHeight + 5 + 'px';
}

function closeSpoiler(spoilerButton, spoiler) {
    spoilerButton.classList.remove('active');
    spoiler.classList.remove('active');
    spoiler.style.maxHeight = '0';
}

for (let spoilerButton of spoilerButtons) {
    const spoiler = getSpoilerElement(spoilerButton);
    spoilerButton.addEventListener('click', function () {
            if (spoiler.classList.contains('active')) {
                closeSpoiler(spoilerButton, spoiler);
            } else {
                openSpoiler(spoilerButton, spoiler);
            }
        }
    );
}

// кнопка для всех
toggleSpoilerVisibilityButton.addEventListener('click', function () {
    if (toggleSpoilerVisibilityButton.classList.contains('active')) {
        toggleSpoilerVisibilityButton.classList.remove('active');
        toggleSpoilerVisibilityButton.textContent = spoilerOpenActionText;
        for (let spoilerButton of spoilerButtons) {
            closeSpoiler(spoilerButton, getSpoilerElement(spoilerButton));
        }
    } else {
        toggleSpoilerVisibilityButton.classList.add('active');
        toggleSpoilerVisibilityButton.textContent = spoilerCloseActionText;
        for (let spoilerButton of spoilerButtons) {
            openSpoiler(spoilerButton, getSpoilerElement(spoilerButton));
        }
    }
})