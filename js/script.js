"use strict";

// IIFE - Immediately Invoked Function Expression
(function(){
    
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?`;
    const apiKey = "fc545a916de7aebd6e23a1787ca4e32b";
    const activities = {
		teamIn: ['basketball', 'hockey', 'volleyball'], // Rain
		teamOutWarm: ['softball/baseball', 'football/soccer', 'American football', 'rowing', 'tennis', 'volleyball', 'ultimate frisbee', 'rugby'],
		teamOutCold: ['hockey'], // Snow && degFInt < 50
		soloIn: ['rock climbing', 'swimming', 'ice skating'], // Rain
		soloOutWarm: ['rowing', 'running', 'hiking', 'cycling', 'rock climbing'],
		soloOutCold: ['snowshoeing', 'downhill skiing', 'cross-country skiing', 'ice skating'] // Snow || degFInt < 50
	};

    let state = {};
    let category = 'all';

    // get weather data when user clicks Forecast button, the add temp and conditions to view
    document.querySelector('.forecast-button').addEventListener('click', function(e){
        e.preventDefault();

        var location = document.querySelector('#location').value;
        document.querySelector('#location').value = '';

        const searchParam = new URLSearchParams(apiUrl);
        searchParam.append('q',location);
        searchParam.append('appid',apiKey);

        // URL + query + apiKey
        // http://api.openweathermap.org/data/2.5/weather?q=goa&apiid=....

        fetch(apiUrl+searchParam).then( function(response){
            return response.json();
        }).then(function(response) {
            console.log(response);
            updateUISuccess(response);
        }).catch(function(err) {
            updateUIFailure(err);
        });

        document.querySelectorAll('.options div').forEach( function (element){
            element.addEventListener('click', updateActivityList, false)
        });   
    });

    function updateActivityList(event) { // selected
        //console.log(event);
        if(event!==undefined && event.target.classList.contains('selected')) {
            return true;
        } else if(event!==undefined && !event.target.classList.contains('selected')) {
            category = event.target.id;


            document.querySelectorAll('.options div').forEach(function (element){
                element.classList.remove('selected');
            })

            event.target.classList.add('selected');
        }

        state.activities = [];

        if(state.condition === 'Rain'){
            updateState('In');
        } else if (state.condition === 'Snow' || state.degFInt<50) {
            updateState('OutCold');
        } else {
            updateState('OutWarm');
        }


        // TeamIn - TeamOutCold - TeamOutWarm
        // SoloIn - SoloOutCold - SoloOutWarm
        function updateState(type){ // TeamIn - TeamOutCold - TeamOutWarm
            if(category === 'solo') {
                state.activities.push(...activities[category+type]);
            } else if(category === 'team') {
                state.activities.push(...activities[category+type]);
            } else {
                // ALL -- HomeWork
            }
        }

        const into = document.querySelector('.activities');
        const activitiesContainer = document.createElement('div');
        const list = document.createElement('ul');

        state.activities.forEach(function (activity) {
            let listItem = document.createElement('li');
            listItem.textContent=activity;
            list.appendChild(listItem);
        });

        activitiesContainer.appendChild(list);
        if(document.querySelector('.activities div')){
            into.replaceChild(activitiesContainer, document.querySelector('.activities div'));
        } else {
            into.appendChild(activitiesContainer);
        }
        
        document.querySelector('.results').classList.add('open');

    }

    function updateUISuccess(response){
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

        if(document.querySelector('.conditions div')){
            into.replaceChild(fragment, document.querySelector('.conditions div'));
        } else {
            into.appendChild(fragment);
        }

        
        updateActivityList();

    }

    function updateUIFailure(err){
        document.querySelector(".conditions").textContent = "Weather Information Unavailable"+err;
    }

})(); // Defining it and calling it
