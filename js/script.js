"use strict";

// IIFE - Immediately Invoked Function Expression
(function(){

    const url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "fc545a916de7aebd6e23a1787ca4e32b";

    // get weather data when user clicks Forecast button, the add temp and conditions to view
    document.querySelector('.forecast-button').addEventListener('click', function(e){
        e.preventDefault();

        var location = document.querySelector('#location').value;
        document.querySelector('#location').value = '';

        // URL + query + apiKey
        // http://api.openweathermap.org/data/2.5/weather?q=goa&apiid=....

        fetch(url + location + '&appid=' + apiKey).then( function(response){
            return response.json();
        }).then(function(response) {
            updateUISuccess(response);
        }).catch(function(err) {
            console.log(err);
            updateUIFailure(err);
        });

        
    });

    function updateUISuccess(response){
        console.log(response);
        var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC); //
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF); //

        var state = {
            condition: response.weather[0].main,
            icon: "http://openweathermap.org/img/w/"+response.weather[0].icon+".png",
            degCInt: degCInt,
            degFInt: degFInt,
            city: response.name
        };

        const into = document.querySelector('.conditions');
        const fragment = document.createDocumentFragment();

        //div -- p city -- p conditions --- img -icon
        var container = document.createElement('div');

        var cityPara = document.createElement('p');
        // <p class="city"> Delhi </p>
        cityPara.setAttribute('class', 'city');
        cityPara.textContent = state.city;

        var conditionsPara = document.createElement('p');
        conditionsPara.textContent = state.degCInt + "\xB0 C / " + state.degFInt + "\xB0 F";

        var iconImage = document.createElement('img');
        //<img src="" alt=""></img>
        iconImage.setAttribute('src', state.icon);
        iconImage.setAttribute('alt', state.condition);

        conditionsPara.appendChild(iconImage);

        container.appendChild(cityPara);
        container.appendChild(conditionsPara);        

        fragment.appendChild(container);

        into.appendChild(fragment);


    }

    function updateUIFailure(){
        console.log("failed")
    }

})(); // Defining it and calling it
