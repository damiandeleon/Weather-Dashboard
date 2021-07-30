# Weather-Dashboard
This tool is used to pull the local forecast plus a five-day forecast by city for a user.  It derives the data from the Open Weather API site. All searches are saved to the web browser's local storage, and if not cleared, then can be accessed again when the page is revisited.

<p>&nbsp;</p>

## To Launch
Click: [Launch Weather Dashboard](https://damiandeleon.github.io/Weather-Dashboard/)

<p>&nbsp;</p>

## Greeting
If the page is opened and there is no information in the local storage, a greeting will appear as an alert to the user. 

![greeting](https://user-images.githubusercontent.com/73486962/106804764-6d669b80-662b-11eb-9004-b72cfb492391.png)

<p>&nbsp;</p>

## Search Function

The user can enter their city of choice in the search parameter.  The search will trigger a call to the `Open Weather API` which will return the curernt weather and the five day forecast for the searched city.
* the app will alert the user if the search button is pressed but no search criteria has been entered.

![search parameter](https://user-images.githubusercontent.com/73486962/106804774-6f305f00-662b-11eb-980a-65d538fce613.png)

<p>&nbsp;</p>

## Current Weather
The Current Weather will display on the main module showing the current weather conditions.
 - recalling the name of the city, the date, and a weather status icon from the Open Weather API data
 - the current temperature
 - the current Humidity %
 - the current Wind Speed MPH
 - the UV Index

![mainDisplay](https://user-images.githubusercontent.com/73486962/127681880-2bc1485a-ebe6-4770-8338-48ef2408fa0e.png)


<p>&nbsp;</p>

## UV Index Color Coding 
The UV Index will dynamically dispay with a colored background representative of the index severity as outlined by the World Health Organization (WHO).  UV Index warnings serve to alert the user of dangerous light radiation levels when skin protection or coverage may be required.

![UV Index levels](https://user-images.githubusercontent.com/73486962/106804770-6e97c880-662b-11eb-801b-a1520635232b.png) 

<p>&nbsp;</p>

## 5 Day Forecast
The five-day forecast will provide the weather conditions via an icon, the high Temperature and he humidity %.  Each five-day forecast is represented, by date, in its own respective blue card.  

![5 day forecast](https://user-images.githubusercontent.com/73486962/106804769-6e97c880-662b-11eb-96fc-9811a890ffad.png)


<p>&nbsp;</p>

# Search History Area
The history of the user's searches is displayed on the left side of the window.  The search history is saved in local storage.  
<p>&nbsp;</p>

### Display Weather from the Search History List
##### The user can launch a new search by clicking on any of the names shown on the Search History.
<p>&nbsp;</p>

### Clear History
##### The user can clear the local storage and thus the search history by clicking on the `Clear History` button.

<p>&nbsp;</p>

![searchHistory](https://user-images.githubusercontent.com/73486962/127678516-a458e9f0-3579-4469-a97c-2adbadf84f98.png)

<p>&nbsp;</p>


## Credits
The weather data is provided by Open Weather API:  https://openweathermap.org/

The date and time represented is provided by Moment.js:  https://momentjs.com/

