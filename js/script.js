const image = document.querySelector('.image');

image.addEventListener('click', function() {
    image.classList.toggle('full');
    image.parentElement.classList.toggle('show');
});