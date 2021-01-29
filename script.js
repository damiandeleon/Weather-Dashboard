
//create get query for the city search 
var citySearchInput = document.querySelector("#citySearchInput");
var cityFormEl = document.querySelector("#city-form")
var cityNameResults = document.querySelector(".cityNameResults");
var cityTempResults = document.querySelector(".cityTempResults");
var cityHumidityResults = document.querySelector(".cityHumidityResults");
var cityWindSpeedResults = document.querySelector(".cityWindSpeedResults");
var cityUVIndexResults = document.querySelector(".cityUVIndexResults");



// create form submit handler to take out the whitespace and review what was entered. 
var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var cityname = citySearchInput.value.trim();
  
    if (cityname) {
      getCityWeather(cityname);
  
      cityNameResults.textContent = cityname + " (make code to get today's date)";
      citySearchInput.value = '';
    } else {
      alert('Please enter a GitHub username');
    }
  };

// create function that will insert the city search into the API search dynamically
var getCityWeather = function(city){
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=d26847a740a8421604e3803e540bf50a"

    fetch(cityUrl)
        .then(function (response) {
            if(response.ok) {
                response.json()
                .then(function (data) {
                    displayWeather(data)
                });
            } else {
                alert("Error: " + response.statusText);
            }
        });
    }
//create function to actually display weather into a user friendly presentation from the API code.  **** Call the funciton displayWeather() *****

function displayWeather(data) {
    // for (var i = 0; i < data.length; i++){
        var temperature = data.main.temp;
        cityTempResults.textContent = "Temperature: " +temperature +" ° F";
        var humidity = data.main.humidity;
        cityHumidityResults.textContent = "Humidity: "+humidity +"%";
        windSpeed = data.wind.speed;
        cityWindSpeedResults.textContent = "Wind Speed: " +windSpeed + " MPH";
    // }
};

//create city search event listener
cityFormEl.addEventListener('submit', formSubmitHandler);