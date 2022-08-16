const images = document.querySelectorAll('.image');

for (let image of images) {
    image.addEventListener('click', function () {
        image.classList.toggle('full');
        image.parentElement.classList.toggle('show');
    });
}