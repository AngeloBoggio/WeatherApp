const myImage = document.getElementById('searchButton');
const secondImage = document.getElementById('searchBar');

myImage.addEventListener('click', () => {
  myImage.classList.add('animate');
  secondImage.classList.add('animate');
});