
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
var cityNameSearchItem = document.querySelector(".cityNameSearchItem");
var itemPlace1 = document.querySelector("#itemPlace1")
var itemPlace2 = document.querySelector("#itemPlace2")
var itemPlace3 = document.querySelector("#itemPlace3")
var itemPlace4 = document.querySelector("#itemPlace4")
var itemPlace5 = document.querySelector("#itemPlace5")
var cityList = "0"

// create form submit handler to take out the whitespace and review what was entered. 
renderLocalStorage();
function renderLocalStorage() {
    function pullLastSearch (cityname){
            getCityWeather(cityname);
            getFiveDayForecast(cityname);
    
            cityNameResults.textContent = cityname + "  (" + moment().format('l') + ")";
            citySearchInput.value = '';
            cityList.value = cityname;

    }
    var renderedCity15 = localStorage.getItem("15");
    if (renderedCity15) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity1;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity1);
        return
    }

    var renderedCity14 = localStorage.getItem("14");
    if (renderedCity14) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity14;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity14);
        return
    } 

    var renderedCity13 = localStorage.getItem("13");
    if (renderedCity13) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity13;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity13);
        return
    } 

    var renderedCity12 = localStorage.getItem("12");
    if (renderedCity12) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity12;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity12);
        return
    } 

    var renderedCity11 = localStorage.getItem("11");
    if (renderedCity11) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity11;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity11);
        return
    } 

    var renderedCity10 = localStorage.getItem("10");
    if (renderedCity10) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity10;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity10);
        return
    } 

    var renderedCity9 = localStorage.getItem("9");
    if (renderedCity9) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity9;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity9);
        return
    } 
    
    var renderedCity8 = localStorage.getItem("8");
    if (renderedCity8) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity8;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity8);
        return
    } 

    var renderedCity7 = localStorage.getItem("7");
    if (renderedCity7) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity7;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity7);
        return
    } 

    

    var renderedCity6 = localStorage.getItem("6");
    if (renderedCity6) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity6;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity6);
        return
    } 

 
    var renderedCity5 = localStorage.getItem("5");
    if (renderedCity5) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity5;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity5);
        return
    } 


    var renderedCity4 = localStorage.getItem("4");
    if (renderedCity4) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity4;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity4);
        return
    } 

 
    var renderedCity3 = localStorage.getItem("3");
    if (renderedCity3) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity3;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity3);
        return
    } 


    var renderedCity2 = localStorage.getItem("2");
    if (renderedCity2) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity2;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity2);
        return
    }


    var renderedCity1 = localStorage.getItem("1");
    if (renderedCity1) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        liEl.setAttribute("id", "itemPlace");
        liEl.textContent = renderedCity1;
        cityNameSearchItem.appendChild(liEl);
        pullLastSearch(renderedCity1);
    } 


}

//got this from "https://www.youtube.com/watch?v=RbfG7NLKDgQ" How to store A JavaScript Array in Local Storage
function saveLocalStorage(city) {
    cityList++;
    localStorage.setItem(cityList, city);
    var liEl = document.createElement("li");
    liEl.setAttribute("class", "list-group-item");
    liEl.setAttribute("id", "itemPlace");
    liEl.textContent = city;
    cityNameSearchItem.appendChild(liEl);
    return cityList
}

var cityFormSubmitHandler = function (event) {
    event.preventDefault();
    var cityname = citySearchInput.value.trim();

    if (cityname) {
        getCityWeather(cityname);
        getFiveDayForecast(cityname);
        saveLocalStorage(cityname);

        cityNameResults.textContent = cityname + "  (" + moment().format('l') + ")";
        citySearchInput.value = '';
        cityList.value = cityname;
    } else {
        alert('Please enter a city name before searching');
    }

};


// create function that will insert the city search into the API search dynamically
function getCityWeather(city) {
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
    addIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png");
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
function getFiveDayForecast(cityname) {
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=d26847a740a8421604e3803e540bf50a"

    fetch(fiveDayUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        if (todayplus1.imgEL) {
                            todayplus1.removeChild(imgEL);
                        }
                        todayplus1.textContent = moment().add(1, "days").format('l');
                        temptodayplus1.textContent = data.list[1].main.temp_max;
                        humiditytodayplus1.textContent = data.list[1].main.humidity;
                        var weatherIconCode1 = data.list[1].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus1.setAttribute("width", "50px");
                        imgtodayplus1.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode1 + "@2x.png");

                        todayplus2.textContent = moment().add(2, "days").format('l');
                        temptodayplus2.textContent = data.list[9].main.temp_max;
                        humiditytodayplus2.textContent = data.list[9].main.humidity;
                        var weatherIconCode2 = data.list[9].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus2.setAttribute("width", "50px");
                        imgtodayplus2.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode2 + "@2x.png");

                        todayplus3.textContent = moment().add(3, "days").format('l');
                        temptodayplus3.textContent = data.list[17].main.temp_max;
                        humiditytodayplus3.textContent = data.list[17].main.humidity;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        var weatherIconCode3 = data.list[17].weather[0].icon;
                        imgtodayplus3.setAttribute("width", "50px");
                        imgtodayplus3.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode3 + "@2x.png");

                        todayplus4.textContent = moment().add(4, "days").format('l');
                        temptodayplus4.textContent = data.list[25].main.temp_max;
                        humiditytodayplus4.textContent = data.list[25].main.humidity;
                        var weatherIconCode4 = data.list[25].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus4.setAttribute("width", "50px");
                        imgtodayplus4.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode4 + "@2x.png");

                        todayplus5.textContent = moment().add(5, "days").format('l');
                        temptodayplus5.textContent = data.list[33].main.temp_max;
                        humiditytodayplus5.textContent = data.list[33].main.humidity;
                        var weatherIconCode5 = data.list[33].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus5.setAttribute("width", "50px");
                        imgtodayplus5.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode5 + "@2x.png");
                    });
            } else {
                alert("Error: " + response.statusText);
            }
        });
}



//create city search event listener
cityFormEl.addEventListener('submit', cityFormSubmitHandler);