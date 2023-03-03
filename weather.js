const myImage = document.getElementById('searchButton');
const secondImage = document.getElementById('searchBar');
const textBox = document.getElementById('input-wrapper');
const userInput = document.getElementById('user-input');
const weatherElement = document.getElementById('weather');
const weatherDesc = document.getElementById('description');
const cityName = document.getElementById('cityName');
const weatherStatus = document.getElementById('weatherStatus');
const searchForm = document.getElementById('searchForm');


const lat = 25.7743;
const lon = -80.1937;
const API_KEY = 'd24a4e7a0162b43c620700eccfc4e114';
const img = document.createElement('img');

myImage.addEventListener('click', () => {
    myImage.classList.add('animate');
    setTimeout(() => {
      secondImage.style.display = 'block';
      secondImage.classList.add('animate');
      textBox.classList.add('animate');
    }, 1000);
});


userInput.addEventListener('keydown', (event) =>{
  
  if(event.keyCode === 13){
    const inputValue = event.target.value;
    console.log(inputValue);
    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(weatherdata => {
          console.log(weatherdata);
          
          const description = weatherdata.weather[0].description;
          if(description === "scattered clouds" || description === "overcast clouds"){
              // set the source and alt attributes
              img.src = 'icons/cloudy.png';
              img.alt = 'Image description';
              img.classList.add('cloudyLogo');

              // get the parent element to which the image will be appended
              const parent = document.getElementById('mainSquare');
              // append the image element to the parent element
              parent.appendChild(img);
          }else if(description === "clear sky" || description === "few clouds"){
              // set the source and alt attributes
              img.src = 'icons/sunny.png';
              img.alt = 'Image description';
              img.classList.add('sunnyLogo');

              // get the parent element to which the image will be appended
              const parent = document.getElementById('mainSquare');

              // append the image element to the parent element
              parent.appendChild(img);

          }else if(description === "broken clouds"){
              // set the source and alt attributes
              img.src = 'icons/brokenclouds.png';
              img.alt = 'Image description';
              img.classList.add('brokencloudslogo');

              // get the parent element to which the image will be appended
              const parent = document.getElementById('mainSquare');

              // append the image element to the parent element
              parent.appendChild(img);

          }else if(description === "rain" || description === "shower rain" || description === "light rain" || description === "moderate rain" || description === "heavy intensity rain" || description === "very heavy rain" || description === "extreme rain" || description === "	freezing rain" || description === "light intensity shower rain" || description === "heavy intensity shower rain" || description ===  "ragged shower rain" || description === "light intensity drizzle" || description === "drizzle" || description === "heavy intensity drizzle" || description === "light intensity drizzle rain" || description === "drizzle rain" || description === "heavy intensity drizzle rain" || description === "shower rain and drizzle" || description === "heavy shower rain and drizzle" || description === "shower drizzle"){
              // set the source and alt attributes
              img.src = 'icons/rain.png';
              img.alt = 'Image description';
              img.classList.add('rainlogo');

              // get the parent element to which the image will be appended
              const parent = document.getElementById('mainSquare');

              // append the image element to the parent element
              parent.appendChild(img);

          }else if(description === "thunderstorm" || description === "thunderstorm with light rain" || description === "thunderstorm with rain" || description === "thunderstorm with heavy rain" || description === "light thunderstorm" || description === "heavy thunderstorm" || description === "ragged thunderstorm" || description === "thunderstorm with light drizzle" || description === "thunderstorm with drizzle" || description === "thunderstorm with heavy drizzle"){
              // set the source and alt attributes
              img.src = 'icons/storm.png';
              img.alt = 'Image description';
              img.classList.add('stormlogo');

              // get the parent element to which the image will be appended
              const parent = document.getElementById('mainSquare');

              // append the image element to the parent element
              parent.appendChild(img);

          }else if(description === "snow" || description === "light snow" || description === "heavy snow" || description === "sleet" || description === "light shower sleet" || description === "shower sleet" || description === "light rain and snow" || description === "shower snow" || description === "heavy shower snow"){
              // set the source and alt attributes
              img.src = 'icons/snow.png';
              img.alt = 'Image description';
              img.classList.add('snowlogo');

              // get the parent element to which the image will be appended
              const parent = document.getElementById('mainSquare');

              // append the image element to the parent element
              parent.appendChild(img);

          }else if(description === "mist" || description === "smoke" || description === "haze" || description === "sand/dust whirls" || description === "fog" || description === "sand" || description === "dust" || description === "volcanic ash" || description === "squalls" || description === "tornado"){
            // set the source and alt attributes
            img.src = 'icons/misty.png';
            img.alt = 'Image description';
            img.classList.add('mistylogo');

            // get the parent element to which the image will be appended
            const parent = document.getElementById('mainSquare');

            // append the image element to the parent element
            parent.appendChild(img);

          }
          
          weatherStatus.innerHTML = weatherdata.weather[0].description;
          cityName.innerHTML  = data[0].name;
          const temp = Math.floor(((weatherdata.main.temp - 273.15) * 9/5 + 32));
          description[0] = description.charAt(0).toUpperCase();
          textBox.style.display = 'none';
          secondImage.style.display ='none';
          myImage.style.display = 'none';
          weatherElement.innerHTML = ` ${temp}°`;
        })
      })
      .catch(error => console.error(error));
  }
})

