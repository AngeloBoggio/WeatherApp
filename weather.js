const myImage = document.getElementById('searchButton');
const secondImage = document.getElementById('searchBar');
const textBox = document.getElementById('input-wrapper');

myImage.addEventListener('click', () => {
    myImage.classList.add('animate');
    setTimeout(() => {
      secondImage.style.display = 'block';
      secondImage.classList.add('animate');
      textBox.classList.add('animate');
    }, 1000);
  });

