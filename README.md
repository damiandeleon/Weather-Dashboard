# Weather-Dashboard
This tool is used to pull the local forecast plus a five day foreast by city for a user.  It derives the data from the Open Weather API site. 

## To Launch
Click: [Launch Weather Dashboard](https://damiandeleon.github.io/Weather-Dashboard/)

## Search Function

The user must enter their city of choice in the search parameter.  

![search parameter](https://user-images.githubusercontent.com/73486962/106804774-6f305f00-662b-11eb-980a-65d538fce613.png)

## Current Weather
The Current Weather will display on the main module showing the following 
 - recalling the name of the city, the date, and an icon from the Open Weather API data
 - the current termperature
 - the current Humidity %
 - the current Wind Speed MPH
 - the UV Index

 ![Current Weather Module](https://user-images.githubusercontent.com/73486962/106804771-6e97c880-662b-11eb-9351-604b61c1698e.png)

## UV Index
The UV Index will present the user with the number, and will be highlighted according to the severity 

![UV Index levels](https://user-images.githubusercontent.com/73486962/106804770-6e97c880-662b-11eb-801b-a1520635232b.png)

## 5 Day Forecast
The five day forecast will provide the weather conditions via an icon, the high Temperature and he humidity %.  Each 5 day forecast is represented, by date, in it's own resspective blue card.  

![5 day forecast](https://user-images.githubusercontent.com/73486962/106804769-6e97c880-662b-11eb-96fc-9811a890ffad.png)

## Search History
The hisotry of the user's searches is displayed on the left side of the window.  The search history is saved in lcoal storage.

![Search History](https://user-images.githubusercontent.com/73486962/106804765-6dff3200-662b-11eb-9f01-30d98d2931c5.png)

If the page is opened and there is no information in the local storage, a greeting will appear as an alert to the user. 

![greeting](https://user-images.githubusercontent.com/73486962/106804764-6d669b80-662b-11eb-9004-b72cfb492391.png)


## Credits
The weather data is provided by Open Weather API:  https://openweathermap.org/
The date and time represented is provdied by Moment.js:  https://momentjs.com/