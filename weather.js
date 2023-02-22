const myImage = document.getElementById('searchButton');

myImage.addEventListener('click', () => {
    const animation = myImage.animate(
      [
        // // start at the current position
        { left: '200px' },
        {top: '500px'},

  
        // end at 100px to the right
        { right: '500px' }
      ],
      {
        duration: 2000, // 500ms
        easing: 'ease-out' // use ease-out timing function
      }
    );
  
    // attach transitionend event listener outside of animate()
    myImage.addEventListener('transitionend', () => {
      myImage.style.left = '200px'; // relocate the image to a new position
    });
  });