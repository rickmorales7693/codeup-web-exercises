$(() => {


    // Base URL for forecast API
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';



    // Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    function getWeatherInfo(lat, lon){
        $.ajax(getWeatherURL(lat, lon)).done((data) => {
            createFiveCards(data);
        });
    }

    //Function that initializes the map
    const map = initializeMap();
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_PROJECT;
        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }
        return new mapboxgl.Map(mapOptions);
    }

    map.setZoom(9);


    // Add a text box for the user to enter an address that will use geocoding to center the map and place a marker on that location.
    $('#search-button')
        .click(function () {
        const userInput = $('#search-input').val();
        geocode(userInput, MAPBOX_PROJECT).then((data) => {
            const popup = new mapboxgl.Popup()
            const marker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(popup)
                .addTo(map);
            popup.addTo(map);

            map.flyTo({
                center: data,
                zoom: 14,
                speed: 2,
                essential: true
            });
            getCurrentCity(data[0],data[1]);
            createFiveCards();
        });

    });



    //Function that shows the current city and state of the marker that was searched for
    function getCurrentCity(lon, lat) {
        const url = getWeatherURL(lat, lon);
        $.get(url).done((data) => {
            const currentCity = data.city.name;
            $('#current-city').html(currentCity)
        });
    }


    // New Function for 5 Cards
    function createFiveCards() {
        $('#cards').html('');
        for (let i = 0; i < 5; i++) {
            const cardId = `card${i + 1}`;
            const cardContent = `<div id="${cardId}" class="card"></div>`;
            $('#cards').append(cardContent);
        }
        getNextFiveDaysWeather();
    }

    function getNextFiveDaysWeather() {
        const lat = map.getCenter().lat;
        const lon = map.getCenter().lng;
        const url = getWeatherURL(lat, lon);
        const forecastArray = [];

        $.get(url).done((data) => {
            console.log(data);
            const forecast = data.list;

            forecastArray.push(...filterDailyForecasts(forecast));

            forecastArray.forEach((forecastItem, index) => {
                const forecastDateTime = new Date(forecastItem.dt * 1000);
                const forecastDate = forecastDateTime.toLocaleDateString();
                const forecastTime = forecastDateTime.toLocaleTimeString();
                const forecastContent = `
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Date: ${forecastDate} - Time: ${forecastTime}</li>
                          <li class="list-group-item">Temperature: ${forecastItem.main.temp}</li>
                          <li class="list-group-item">Feels Like: ${forecastItem.main.feels_like}</li>
                          <li class="list-group-item">Humidity: ${forecastItem.main.humidity}</li>
                          <li class="list-group-item">Wind Speed: ${forecastItem.wind.speed}</li>
                          <li class="list-group-item">Wind Direction: ${forecastItem.wind.deg}</li>
                          <li class="list-group-item">Clouds: ${forecastItem.clouds.all}</li>
                          <li class="list-group-item">Weather: ${forecastItem.weather[0].description}</li>
                        </ul>
      `;

                $(`#card${index + 1}`).append(forecastContent);
            });
        });
    }
    function filterDailyForecasts(forecast) {
        return forecast.filter((item, index) => index % 8 === 0);
    }

    createFiveCards();


    // Marker for the map
    const marker = createMarker();
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
        getCurrentCity(data[0],data[1]);
    }


    //Click anywhere and get the weather for that location
    map.on('click', (e)=>{
        const lat = e.lngLat.lat;
        const lon = e.lngLat.lng;
        getWeatherInfo(e.lngLat.lat, e.lngLat.lng);
        console.log(e.lngLat.lat, e.lngLat.lng);
        marker.setLngLat([lon, lat]);

    });


    //Get the weather for San Antonio on the page load
    getWeatherInfo(29.4252, -98.4916)

});