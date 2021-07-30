
//create get query for the city search 
var cityFormEl = document.querySelector("#city-form")
var cityHumidityResults = document.querySelector(".cityHumidityResults");
var cityNameResults = document.querySelector(".cityNameResults");
var cityNameSearchItem = document.querySelector(".cityNameSearchItem");
var citySearchInput = document.querySelector("#citySearchInput");
var cityTempResults = document.querySelector(".cityTempResults");
var cityUVIndexResults = document.querySelector(".cityUVIndexResults");
var cityWindSpeedResults = document.querySelector(".cityWindSpeedResults");
var clearButton = document.querySelector(".clearButton");
var humiditytodayplus1 = document.querySelector("#humiditytodayplus1");
var humiditytodayplus2 = document.querySelector("#humiditytodayplus2");
var humiditytodayplus3 = document.querySelector("#humiditytodayplus3");
var humiditytodayplus4 = document.querySelector("#humiditytodayplus4");
var humiditytodayplus5 = document.querySelector("#humiditytodayplus5");
var lastStorageIndex = localStorage.length;
var temptodayplus1 = document.querySelector("#temptodayplus1");
var temptodayplus2 = document.querySelector("#temptodayplus2");
var temptodayplus3 = document.querySelector("#temptodayplus3");
var temptodayplus4 = document.querySelector("#temptodayplus4");
var temptodayplus5 = document.querySelector("#temptodayplus5");
var UVReader = document.querySelector(".UVreader");
//create var cityList after var lastStorageIndex has been created
var cityList = lastStorageIndex;

//create a function that renders the last city previously searched and saved in local Storage.  If local storage is empty, Welcome the user and prompt to start by entering in their first search.  The variable "lastStorageIndex" will be a number equal to the length of the local storage (if three cities have been previously searched, then the value will be 3, if six cities then it will be 6, and so on...)
renderLocalStorage();
function renderLocalStorage() {
    //if the last local storage index is not empty, then get the item in local storage.  If it is empty it will alert with a greeting (see line 41)
    if(lastStorageIndex!=0){
        //create a variable called lastCity to assign to the last indexed city in local storage
        var lastCity = localStorage.getItem(lastStorageIndex)
        //funciton to pull the last searched city
        pullLastSearch(lastCity);
        //call the last index of the local storage, which will be highest indexed number in the local storage.  For loop will cycle through the index until it reaches the number currently assigned to the variable "lastSotrageIndex", which equals the length of the local storage (see line 16).
        for(let i = 1; i <= lastStorageIndex; i++){
            var city = localStorage.getItem(i);
            //launch setLastSearchEl to display the listing of previously searched cities from local storage
            setLastSearchEl(city)
        }
    } else {alert("Welcome to your Weather Dashboard.  Start by entering your first search!")}
}

//display the listing of previously search cities from local storage (parameter of "city" is fed from the "setLastSearchEl(city) function on line 39")
function setLastSearchEl(city){
    //create a new line element called "liEl"
    var liEl = document.createElement("li");
    //set liEl attribute to add a class called "list-group-item itemPlace"
    liEl.setAttribute("class", "list-group-item itemPlace");
    //set liEl attribute to add a value with the city's name.  This will be used to tell the search button what to look for from the previous searched list.
    liEl.setAttribute("value", city);
    //add the name of city parameter as text to the line item
    liEl.textContent = city;
    //add event listener that when clicked, will pull for the city assigned to the element
    liEl.addEventListener("click", function() {
        pullLastSearch(city)
    })
    //Append the newly created line Element to the element with the class of "cityNameSearchItem"
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
//create a function to save the searched city in local storage
function saveLocalStorage(city) {
    //add a new index number to local storage
    cityList++;
    //set the local storage items with the following parameters(the new cityList index number, and the city searched)
    localStorage.setItem(cityList, city);
    //create a new line element called "liEl"
    var liEl = document.createElement("li");
    //set liEl attribute to add a class called "list-group-item itemPlace"
    liEl.setAttribute("class", "list-group-item itemPlace");
    //set liEl attribute to add a value with the city's name.  This will be used to tell the search button what to look for from the previous searched list.
    liEl.setAttribute("value", city);
    //add the name of city parameter as text to the line item
    liEl.textContent = city;
    //add event listener that when clicked, will pull for the city assigned to the element
    liEl.addEventListener("click", function() {
        pullLastSearch(city)
    })

    //Append the newly created line Element to the element with the class of "cityNameSearchItem"
    cityNameSearchItem.appendChild(liEl);
    //return the new cityList
    return cityList
}
// create form submit handler function
var cityFormSubmitHandler = function (event) {
    // prevent default so the page doesn't reload the page
    event.preventDefault();
    //assign a variable named cityname to the value of the event search, and trim out the whitespace.
    var cityname = citySearchInput.value.trim();
    //if the event has a search data to pull (assinged to the "cityname" variable), run three functions 1. Get the City Weather, 2. Get the five day forecast for the searched city. 3. and save the searched city in local storage.  If the search is empty then alert the user to please enter a city before searching (see line 102)
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
                    //then run the following two functions with the data received in the response
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

//create function to display current weather into a user friendly presentation from the API code.  **** Call the funciton displayWeather() *****

function displayWeather(data) {
    //create a variable to capture the current weather icon code from the API data
    var weatherIconCode = data.weather[0].icon;
    //create an img element 
    var addIcon = document.createElement("img");
    //set addIcon img element to 50px width
    addIcon.setAttribute("width", "50px");
    //call the API to display the icon corresponding to the current weather code
    addIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png");
    //in the section with class of "cityNameResults", append the newly created icon
    cityNameResults.append(addIcon);

    //create a variable to capture the current temp from the API data
    var temperature = data.main.temp;
    //in the section with the class of "cityNameResults", add text to dynamically display the current temp pulled from the data.
    cityTempResults.textContent = "Temperature: " + temperature + " ° F";
    //create a variable to capture the current humidity from the API data
    var humidity = data.main.humidity;
    //in the section with the class of "cityNameResults", add text to dynamically display the current humidity pulled from the data.
    cityHumidityResults.textContent = "Humidity: " + humidity + "%";
    //create a variable to capture the current wind speed from the API data
    windSpeed = data.wind.speed;
    //in the section with the class of "cityNameResults", add text to dynamically display the current wind speed pulled from the data.
    cityWindSpeedResults.textContent = "Wind Speed: " + windSpeed + " MPH";
};

//create a function to capture the UV index from the API response package in the "getCityWeather" function
function getUVIndex(data1) {
    
    //to ensure the accurate UV index is pulled, get the coordinates of the pulled city from the API data package (both the lat and the lon)
    var latitidue = data1.coord.lat;
    var longitude = data1.coord.lon;

    //create a dymanic URL which will make an API call to get the UV Index Data with the city's coordinates
    var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitidue + "&lon=" + longitude + "&appid=d26847a740a8421604e3803e540bf50a"
    //using the fetch command pull the searched data "uvURL" from the open weather api.
    fetch(uvUrl)
        //then grab the response
        .then(function (response) {
            //if the response is okay with no issues...
            if (response.ok) {
                //convert the response to json so javascript can use it
                response.json()
                    //then call the displayUVIndex function and feed it the data
                    .then(function (data1) {
                        displayUVIndex(data1);
                    });
            }
        });

    //create a function that will dynamically dispay the pulled UV data from the "getUVIndex" function 
    function displayUVIndex(data1) {
        //pull the value of the data package (this is the actual UV Index number) and assign it to a varialbe called UVIndex
        var UVIndex = data1.value;

        //in the element with the class of UVReader add the UVindex as text
        UVReader.textContent = UVIndex;
        
        //create a dynamic dispay function to color the background of the UVReader element according tot he following logic...

        //if the UV Index is between 0 and 3, color green
        if (UVIndex > 0 && UVIndex <= 2.99) {
            UVReader.setAttribute("style", "background-color: green; color: white");
        
        //if the UV Index is between 3 and6, color yellow
        } else if (UVIndex > 2.99 && UVIndex <= 5.99) {
            UVReader.setAttribute("style", "background-color: yellow; color: black");
        //if the UV Index is between 6 and 8, color orange
        } else if (UVIndex > 5.99 && UVIndex <= 7.99) {
            UVReader.setAttribute("style", "background-color: darkorange; color: white");
        //if the UV Index is between 8 and 11, color red
        } else if (UVIndex > 7.99 && UVIndex <= 10.99) {
            UVReader.setAttribute("style", "background-color: red; color: white");
        } else if (UVIndex > 10.99) {
        //if the UV Index is anything else (basically anything over 11) color purple
            UVReader.setAttribute("style", "background-color: purple; color: white");
        }
    };
}
//create function to pull the five day forecast from the five day forecast API link for the city (cityname) fed by the cityFormSubmitHandler function
function getFiveDayForecast(cityname) {
    //create a new variable called "fiveDayURL" with the search url that can dynamically search for the city name fed into the function parameter
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=d26847a740a8421604e3803e540bf50a"
   //using the fetch command (Fetch API sets up a request to capture data from a url and will then use the .then promise to do something with that data) pull the searched data "fiveDayUrl" from the open weather api. 
    fetch(fiveDayUrl)
        //then grab the response
        .then(function (response) {
            //if the repnose is okay with no issues
            if (response.ok) {
                //convert the response to json so javascript can use it
                response.json()
                    //then add the data in each of the todayplus(x) class elements: 
                    
                    //the date pulled from moment (for future dates add x days per the moment instructions)
                    //the high temp, the humidity, and the weather icon code from the data (add [X] to navigate across the data and capture the next day's data)
                    .then(function (data) {
                        if (todayplus1.imgEL) {
                            todayplus1.removeChild(imgEL);
                        }
                        todayplus1.textContent = moment().add(1, "days").format('l');
                        temptodayplus1.textContent = data.list[1].main.temp_max;
                        humiditytodayplus1.textContent = data.list[1].main.humidity;
                        var weatherIconCode1 = data.list[6].weather[0].icon;
                        //add pictures to class="imgtodayplus(x)" using the icon code dynamically
                        imgtodayplus1.setAttribute("width", "50px");
                        imgtodayplus1.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode1 + "@2x.png");

                        todayplus2.textContent = moment().add(2, "days").format('l');
                        temptodayplus2.textContent = data.list[9].main.temp_max;
                        humiditytodayplus2.textContent = data.list[9].main.humidity;
                        var weatherIconCode2 = data.list[14].weather[0].icon;
                        //add pictures to class="imgtodayplus(x)" using the icon code dynamically
                        imgtodayplus2.setAttribute("width", "50px");
                        imgtodayplus2.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode2 + "@2x.png");

                        todayplus3.textContent = moment().add(3, "days").format('l');
                        temptodayplus3.textContent = data.list[17].main.temp_max;
                        humiditytodayplus3.textContent = data.list[17].main.humidity;
                        //add pictures to class="imgtodayplus(x)" using the icon code dynamically
                        var weatherIconCode3 = data.list[22].weather[0].icon;
                        imgtodayplus3.setAttribute("width", "50px");
                        imgtodayplus3.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode3 + "@2x.png");

                        todayplus4.textContent = moment().add(4, "days").format('l');
                        temptodayplus4.textContent = data.list[25].main.temp_max;
                        humiditytodayplus4.textContent = data.list[25].main.humidity;
                        var weatherIconCode4 = data.list[30].weather[0].icon;
                        //add pictures to class="imgtodayplus(x)" using the icon code dynamically
                        imgtodayplus4.setAttribute("width", "50px");
                        imgtodayplus4.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode4 + "@2x.png");

                        todayplus5.textContent = moment().add(5, "days").format('l');
                        temptodayplus5.textContent = data.list[33].main.temp_max;
                        humiditytodayplus5.textContent = data.list[33].main.humidity;
                        var weatherIconCode5 = data.list[38].weather[0].icon;
                        //add pictures to class="imgtodayplus(x)" using the icon code dynamically
                        imgtodayplus5.setAttribute("width", "50px");
                        imgtodayplus5.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIconCode5 + "@2x.png");
                    });
            } else {
                //if the response if not okay, alert with the eror
                alert("Error: " + response.statusText);
            }
        });
}



//create city search event listener
cityFormEl.addEventListener('submit', cityFormSubmitHandler);

//create clearButton event listener
clearButton.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})

