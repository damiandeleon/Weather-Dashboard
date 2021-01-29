
//create get query for the city search 
citySearchInput = document.querySelector("#citySearchInput");
cityFormEl = document.querySelector("#city-form")
cityNameResults = document.querySelector(".cityNameResults");
cityTempResults = document.querySelector(".cityTempResults");
cityHumidityResults = document.querySelector(".cityHumidityResults");
cityWindSpeedResults = document.querySelector(".cityWindSpeedResults");
cityUVIndexResults = document.querySelector(".cityUVIndexResults");


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
    var cityUrl = "api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d26847a740a8421604e3803e540bf50a"
}

cityFormEl.addEventListener('submit', formSubmitHandler);