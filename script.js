
//create get query for the city search 
var citySearchInput = document.querySelector("#citySearchInput");
var cityFormEl = document.querySelector("#city-form")
var cityNameResults = document.querySelector(".cityNameResults");
var cityTempResults = document.querySelector(".cityTempResults");
var cityHumidityResults = document.querySelector(".cityHumidityResults");
var cityWindSpeedResults = document.querySelector(".cityWindSpeedResults");
var cityUVIndexResults = document.querySelector(".cityUVIndexResults");
var zipFormEl = document.querySelector("#zip-form");
var zipCitySearchInput = document.querySelector("#zipCitySearchInput");
var UVReader = document.querySelector(".UVreader");
var temptodayplus1 = document.querySelector("#temptodayplus1");
var humiditytodayplus1 = document.querySelector("#humiditytodayplus1");
var temptodayplus2 = document.querySelector("#temptodayplus2");
var humiditytodayplus2 = document.querySelector("#humiditytodayplus2");
var temptodayplus3 = document.querySelector("#temptodayplus3");
var humiditytodayplus3 = document.querySelector("#humiditytodayplus3");
var temptodayplus4 = document.querySelector("#temptodayplus4");
var humiditytodayplus4 = document.querySelector("#humiditytodayplus4");
var temptodayplus5 = document.querySelector("#temptodayplus5");
var humiditytodayplus5 = document.querySelector("#humiditytodayplus5");
var listGroup = document.querySelector(".cityNameSearchItem");
var itemPlace1 = document.querySelector("#itemPlace1")
var itemPlace2 = document.querySelector("#itemPlace2")
var itemPlace3 = document.querySelector("#itemPlace3")
var itemPlace4 = document.querySelector("#itemPlace4")
var itemPlace5 = document.querySelector("#itemPlace5")
var cityList = [];

// create form submit handler to take out the whitespace and review what was entered. 

function renderLocalStorage(){
console.log("second city List Run----", cityList);
}

var cityFormSubmitHandler = function (event) {
    event.preventDefault();
    var cityname = citySearchInput.value.trim();

    if (cityname) {
        getCityWeather(cityname);
        getFiveDayForecast(cityname);

        cityNameResults.textContent = cityname + "  (" + moment().format('l')+")"; 
        citySearchInput.value = '';
        cityList.value = cityname;
    } else {
        alert('Please enter a city name before searching');
    }
     
};


// create function that will insert the city search into the API search dynamically
var getCityWeather = function (city) {
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=d26847a740a8421604e3803e540bf50a"

    fetch(cityUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        displayWeather(data)
                        getUVIndex(data);
                    });
            } else {
                alert("Error: " + response.statusText);
            }
        });
}

//create function to actually display weather into a user friendly presentation from the API code.  **** Call the funciton displayWeather() *****

function displayWeather(data) {
    var weatherIconCode = data.weather[0].icon;
    var addIcon = document.createElement("img");
    addIcon.setAttribute("width", "50px");
    addIcon.setAttribute("src", "http://openweathermap.org/img/wn/"+weatherIconCode+"@2x.png");
    cityNameResults.append(addIcon);
    var temperature = data.main.temp;
    cityTempResults.textContent = "Temperature: " + temperature + " ° F";
    var humidity = data.main.humidity;
    cityHumidityResults.textContent = "Humidity: " + humidity + "%";
    windSpeed = data.wind.speed;
    cityWindSpeedResults.textContent = "Wind Speed: " + windSpeed + " MPH";
};

function getUVIndex(data1) {
    var latitidue = data1.coord.lat;
    var longitude = data1.coord.lon;
    var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitidue + "&lon=" + longitude + "&appid=d26847a740a8421604e3803e540bf50a"

    fetch(uvUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data1) {
                        displayUVIndex(data1);
                    });
            }
        });
    function displayUVIndex(data1) {
        var UVIndex = data1.value;
        UVReader.textContent = UVIndex;
        if (UVIndex > 0 && UVIndex <= 2.99) {
            UVReader.setAttribute("style", "background-color: green; color: white");
        } else if (UVIndex > 2.99 && UVIndex <= 5.99) {
            UVReader.setAttribute("style", "background-color: yellow; color: black");
        } else if (UVIndex > 5.99 && UVIndex <= 7.99) {
            UVReader.setAttribute("style", "background-color: darkorange; color: white");
        } else if (UVIndex > 7.99 && UVIndex <= 10.99) {
            UVReader.setAttribute("style", "background-color: red; color: white");
        } else if (UVIndex > 10.99) {
            UVReader.setAttribute("style", "background-color: purple; color: white");
        }
    };  
}
function getFiveDayForecast(cityname){
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=d26847a740a8421604e3803e540bf50a"

    fetch(fiveDayUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        if(todayplus1.imgEL){
                            todayplus1.removeChild(imgEL);
                        }
                        todayplus1.textContent = moment().add(1, "days").format('l');  
                        temptodayplus1.textContent = data.list[1].main.temp_max;
                        humiditytodayplus1.textContent = data.list[1].main.humidity;
                        var weatherIconCode1=data.list[1].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus1.setAttribute("width", "50px");
                        imgtodayplus1.setAttribute("src", "http://openweathermap.org/img/wn/"+weatherIconCode1+"@2x.png");                        
                        
                        todayplus2.textContent = moment().add(2, "days").format('l'); 
                        temptodayplus2.textContent = data.list[9].main.temp_max;
                        humiditytodayplus2.textContent = data.list[9].main.humidity;
                        var weatherIconCode2=data.list[9].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus2.setAttribute("width", "50px");
                        imgtodayplus2.setAttribute("src", "http://openweathermap.org/img/wn/"+weatherIconCode2+"@2x.png");

                        todayplus3.textContent = moment().add(3, "days").format('l'); 
                        temptodayplus3.textContent = data.list[17].main.temp_max;
                        humiditytodayplus3.textContent = data.list[17].main.humidity;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        var weatherIconCode3=data.list[17].weather[0].icon;
                        imgtodayplus3.setAttribute("width", "50px");
                        imgtodayplus3.setAttribute("src", "http://openweathermap.org/img/wn/"+weatherIconCode3+"@2x.png");

                        todayplus4.textContent = moment().add(4, "days").format('l'); 
                        temptodayplus4.textContent = data.list[25].main.temp_max;
                        humiditytodayplus4.textContent = data.list[25].main.humidity;
                        var weatherIconCode4=data.list[25].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus4.setAttribute("width", "50px");
                        imgtodayplus4.setAttribute("src", "http://openweathermap.org/img/wn/"+weatherIconCode4+"@2x.png");

                        todayplus5.textContent = moment().add(5, "days").format('l'); 
                        temptodayplus5.textContent = data.list[33].main.temp_max;
                        humiditytodayplus5.textContent = data.list[33].main.humidity;
                        var weatherIconCode5=data.list[33].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus5.setAttribute("width", "50px");
                        imgtodayplus5.setAttribute("src", "http://openweathermap.org/img/wn/"+weatherIconCode5+"@2x.png");
                    });
            } else {
                alert("Error: " + response.statusText);
            }
        });
}



//create city search event listener
cityFormEl.addEventListener('submit', cityFormSubmitHandler);