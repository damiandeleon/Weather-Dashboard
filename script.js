
//create get query for the city search 
var citySearchInput = document.querySelector("#citySearchInput");
var cityFormEl = document.querySelector("#city-form")
var cityNameResults = document.querySelector(".cityNameResults");
var cityTempResults = document.querySelector(".cityTempResults");
var cityHumidityResults = document.querySelector(".cityHumidityResults");
var cityWindSpeedResults = document.querySelector(".cityWindSpeedResults");
var cityUVIndexResults = document.querySelector(".cityUVIndexResults");
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
var lastStorageIndex = localStorage.length;
var cityList = lastStorageIndex;

//create a function that renders the last city previously searched and saved in local Storage.  If local storage is empty, Welcome the user and prompt to start by entering in their first search.  The variable "lastStorageIndex" will be a number equal to the length of the local storage (if three cities have been previously searched, then the value will be 3, if six cities then it will be 6, and so on...)
renderLocalStorage();
function renderLocalStorage() {
    //if the last local storage index is not empty, then get the item in local storage
    if(lastStorageIndex!=0){
        //create a variable called lastCity to assign to the last indexed city in local storage
        var lastCity = localStorage.getItem(lastStorageIndex)
        //funciton to pull the last searched city
        pullLastSearch(lastCity);
        //call the last index of the local storage, which will be highest indexed number in the local storage.  For loop will cycle through the index until it reaches the number currently assigned to the variable "lastSotrageIndex", which equals the length of the local storage (see line 22).
        for(let i = 1; i <= lastStorageIndex; i++){
            var city = localStorage.getItem(i);
            setLastSearchEl(city)
        }
    } else {alert("Welcome to your Weather Dashboard.  Start by entering your first search!")}
}

function setLastSearchEl(city){
    var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item itemPlace");
        liEl.textContent = city;
        cityNameSearchItem.appendChild(liEl);
}

function pullLastSearch (lastCity){
    getCityWeather(lastCity);
    getFiveDayForecast(lastCity);

    //populate the search results display section with the class of cityNameResults with the following information...
    //...the last searched city name (and the current date) pulled from moment (see the script seciton at the bottom of the HTML file)
    cityNameResults.textContent = lastCity + "  (" + moment().format('l') + ")";

    //...reset the field with the id "citySearchInput" back to empty
    citySearchInput.value = '';

    //...set the page section with the
    // cityList.value = lastCity;

}

//got this from "https://www.youtube.com/watch?v=RbfG7NLKDgQ" How to store A JavaScript Array in Local Storage
function saveLocalStorage(city) {
    cityList++;
    localStorage.setItem(cityList, city);
    var liEl = document.createElement("li");
    liEl.setAttribute("class", "list-group-item itemPlace");
    liEl.textContent = city;
    cityNameSearchItem.appendChild(liEl);
    return cityList
}
// create form submit handler function
var cityFormSubmitHandler = function (event) {
    // prevent default so the page doesn't reload the page
    event.preventDefault();
    //assign a variable named cityname to the value of the event search, and trim out the whitespace.
    var cityname = citySearchInput.value.trim();
    //if the event has a search data to pull (assinged to the "cityname" variable), run three functions 1. Get the City Weather, 2. Get the five day forecast for the searched city. 3. and save the searched city in local storage.  If the search is empty then alert the user to please enter a city before searching.
    if (cityname) {
        //run getCityWeather function with the cityname search paramter
        getCityWeather(cityname);
        //run getFiveDayForecast function with the cityname search paramter
        getFiveDayForecast(cityname);
        //run saveLocalStorage function with the cityname search paramter
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
    //cityURL will be the search parameters fed to the open weather API using the serach parameter format required by the API documents page.  the searched city will be inserted into the search parameters in the required place in the url
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=d26847a740a8421604e3803e540bf50a"
    //using the fetch command (Fetch API sets up a request to capture data from a url and will then use the .then promise to do something with that data) pull the searched data "cityUrl" from the open weather api.
    fetch(cityUrl)
        //then grab the response
        .then(function (response) {
            //if the response is okay with no issues
            if (response.ok) {
                //convert the response to json so javascript can use it
                response.json()
                    //then fun the following two functionw with the data received in the response
                    .then(function (data) {
                        //launch the displayWeather function with the data parameters
                        displayWeather(data)
                        //launch the getUVIndex function with the data parameters
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
                        var weatherIconCode1 = data.list[6].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus1.setAttribute("width", "50px");
                        imgtodayplus1.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode1 + "@2x.png");

                        todayplus2.textContent = moment().add(2, "days").format('l');
                        temptodayplus2.textContent = data.list[9].main.temp_max;
                        humiditytodayplus2.textContent = data.list[9].main.humidity;
                        var weatherIconCode2 = data.list[14].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus2.setAttribute("width", "50px");
                        imgtodayplus2.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode2 + "@2x.png");

                        todayplus3.textContent = moment().add(3, "days").format('l');
                        temptodayplus3.textContent = data.list[17].main.temp_max;
                        humiditytodayplus3.textContent = data.list[17].main.humidity;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        var weatherIconCode3 = data.list[22].weather[0].icon;
                        imgtodayplus3.setAttribute("width", "50px");
                        imgtodayplus3.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode3 + "@2x.png");

                        todayplus4.textContent = moment().add(4, "days").format('l');
                        temptodayplus4.textContent = data.list[25].main.temp_max;
                        humiditytodayplus4.textContent = data.list[25].main.humidity;
                        var weatherIconCode4 = data.list[30].weather[0].icon;
                        //add code to add pictures to class="imgtodayplus(x)" -----------
                        imgtodayplus4.setAttribute("width", "50px");
                        imgtodayplus4.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode4 + "@2x.png");

                        todayplus5.textContent = moment().add(5, "days").format('l');
                        temptodayplus5.textContent = data.list[33].main.temp_max;
                        humiditytodayplus5.textContent = data.list[33].main.humidity;
                        var weatherIconCode5 = data.list[38].weather[0].icon;
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

