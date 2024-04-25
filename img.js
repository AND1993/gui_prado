const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.image');
const textContainer = document.querySelector('.text-container');

image.addEventListener('click', () => {
  textContainer.classList.toggle('expanded');
});

imageContainer.addEventListener('mouseleave', () => {
  textContainer.classList.remove('expanded');
});