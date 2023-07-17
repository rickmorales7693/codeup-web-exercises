$(() => {

    // Base URL for forecast API
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';


    // Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
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
    $('#search-button').click(function () {
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
        });
    });


    //Function that shows the current city of the marker that was searched for
    function getCurrentCity(lon, lat) {
        const url = getWeatherURL(lat, lon);
        $.get(url).done((data) => {
            console.log(data);
            const currentCity = data.city.name;
            $('#current-city').html(currentCity)
        });
    }


    // Function that gives a 24-hour forecast for the location of the marker
    // function getTwentyFourHourForecast() {
    //     const lat = map.getCenter().lat;
    //     const lon = map.getCenter().lng;
    //     const url = getWeatherURL(lat, lon);
    //
    //     $.get(url).done((data) => {
    //         console.log(data);
    //         const forecast = data.list;
    //         const currentForecast = forecast.filter((item) => {
    //             return item.dt_txt.includes(formattedDate);
    //         });
    //
    //         currentForecast.forEach((forecast, index) => {
    //             const cardId = `card${index + 1}`;
    //             const cardContentElement = $(`#${cardId}-content`);
    //
    //             const forecastContent = `
    //             <ul class="list-group list-group-flush">
    //                 <li class="list-group-item">Temperature: ${forecast.main.temp}</li>
    //                 <li class="list-group-item">Feels Like: ${forecast.main.feels_like}</li>
    //                 <li class="list-group-item">Humidity: ${forecast.main.humidity}</li>
    //                 <li class="list-group-item">Wind Speed: ${forecast.wind.speed}</li>
    //                 <li class="list-group-item">Wind Direction: ${forecast.wind.deg}</li>
    //                 <li class="list-group-item">Clouds: ${forecast.clouds.all}</li>
    //                 <li class="list-group-item">Weather: ${forecast.weather[0].description}</li>
    //             </ul>
    //         `;
    //
    //             cardContentElement.html(forecastContent);
    //         });
    //     });
    // }
    //
    // getTwentyFourHourForecast();


    // Function that gives a 48-hour forecast for the location of the marker
    // function getFortyEightHourForecast() {
    //     const lat = map.getCenter().lat;
    //     const lon = map.getCenter().lng;
    //     const url = getWeatherURL(lat, lon);
    //
    //     $.get(url).done((data) => {
    //         console.log(data);
    //         const forecast = data.list;
    //         const currentForecast = forecast.filter((forecast) => {
    //             return forecast.dt_txt.includes(formattedDate);
    //         });
    //         console.log(currentForecast);
    //         const currentForecastHTML = currentForecast.map((forecast) => {
    //             return `
    //             <div class="card">
    //                 <div class="card-header" id="headingOne" currentDate="${formattedDate}">
    //                     <h5 class="mb-0">
    //                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
    //                                 aria-expanded="true" aria-controls="collapseOne">
    //                             ${forecast.dt_txt}
    //                         </button>
    //                     </h5>
    //                 </div>
    //                 <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
    //                      data-parent="#accordionExample">
    //                     <div class="card-body">
    //                         <ul>
    //                             <li>Temperature: ${forecast.main.temp}</li>
    //                             <li>Feels Like: ${forecast.main.feels_like}</li>
    //                             <li>Humidity: ${forecast.main.humidity}</li>
    //                             <li>Wind Speed: ${forecast.wind.speed}</li>
    //                             <li>Wind Direction: ${forecast.wind.deg}</li>
    //                             <li>Clouds: ${forecast.clouds.all}</li>
    //                             <li>Weather: ${forecast.weather[0].description}</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             `;
    //         });
    //         $('#accordionExample').html(currentForecastHTML);
    //     });
    // }


    // Function that gives a 72-hour forecast for the location of the marker
    // function getSeventyTwoHourForecast() {
    //     const lat = map.getCenter().lat;
    //     const lon = map.getCenter().lng;
    //     const url = getWeatherURL(lat, lon);
    //
    //     $.get(url).done((data) => {
    //         console.log(data);
    //         const forecast = data.list;
    //         const currentForecast = forecast.filter((forecast) => {
    //             return forecast.dt_txt.includes(formattedDate);
    //         });
    //         console.log(currentForecast);
    //         const currentForecastHTML = currentForecast.map((forecast) => {
    //             return `
    //             <div class="card">
    //                 <div class="card-header" id="headingOne" currentDate="${formattedDate}">
    //                     <h5 class="mb-0">
    //                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
    //                                 aria-expanded="true" aria-controls="collapseOne">
    //                             ${forecast.dt_txt}
    //                         </button>
    //                     </h5>
    //                 </div>
    //                 <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
    //                      data-parent="#accordionExample">
    //                     <div class="card-body">
    //                         <ul>
    //                             <li>Temperature: ${forecast.main.temp}</li>
    //                             <li>Feels Like: ${forecast.main.feels_like}</li>
    //                             <li>Humidity: ${forecast.main.humidity}</li>
    //                             <li>Wind Speed: ${forecast.wind.speed}</li>
    //                             <li>Wind Direction: ${forecast.wind.deg}</li>
    //                             <li>Clouds: ${forecast.clouds.all}</li>
    //                             <li>Weather: ${forecast.weather[0].description}</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             `;
    //         });
    //         $('#accordionExample').html(currentForecastHTML);
    //     });
    // }


    // Function that gives a 96-hour forecast for the location of the marker
    // function getNinetySixHourForecast() {
    //     const lat = map.getCenter().lat;
    //     const lon = map.getCenter().lng;
    //     const url = getWeatherURL(lat, lon);
    //
    //     $.get(url).done((data) => {
    //         console.log(data);
    //         const forecast = data.list;
    //         const currentForecast = forecast.filter((forecast) => {
    //             return forecast.dt_txt.includes(formattedDate);
    //         });
    //         console.log(currentForecast);
    //         const currentForecastHTML = currentForecast.map((forecast) => {
    //             return `
    //             <div class="card">
    //                 <div class="card-header" id="headingOne" currentDate="${formattedDate}">
    //                     <h5 class="mb-0">
    //                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
    //                                 aria-expanded="true" aria-controls="collapseOne">
    //                             ${forecast.dt_txt}
    //                         </button>
    //                     </h5>
    //                 </div>
    //                 <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
    //                      data-parent="#accordionExample">
    //                     <div class="card-body">
    //                         <ul>
    //                             <li>Temperature: ${forecast.main.temp}</li>
    //                             <li>Feels Like: ${forecast.main.feels_like}</li>
    //                             <li>Humidity: ${forecast.main.humidity}</li>
    //                             <li>Wind Speed: ${forecast.wind.speed}</li>
    //                             <li>Wind Direction: ${forecast.wind.deg}</li>
    //                             <li>Clouds: ${forecast.clouds.all}</li>
    //                             <li>Weather: ${forecast.weather[0].description}</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             `;
    //         });
    //         $('#accordionExample').html(currentForecastHTML);
    //     });
    // }


    // Function that gives a 120-hour forecast for the location of the marker
    // function getFiveDayForecast() {
    //     const lat = map.getCenter().lat;
    //     const lon = map.getCenter().lng;
    //     const url = getWeatherURL(lat, lon);
    //
    //     $.get(url).done((data) => {
    //         console.log(data);
    //         const forecast = data.list;
    //         const currentForecast = forecast.filter((forecast) => {
    //             return forecast.dt_txt.includes(formattedDate);
    //         });
    //         console.log(currentForecast);
    //         const currentForecastHTML = currentForecast.map((forecast) => {
    //             return `
    //             <div class="card">
    //                 <div class="card-header" id="headingOne" currentDate="${formattedDate}">
    //                     <h5 class="mb-0">
    //                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
    //                                 aria-expanded="true" aria-controls="collapseOne">
    //                             ${forecast.dt_txt}
    //                         </button>
    //                     </h5>
    //                 </div>
    //                 <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
    //                      data-parent="#accordionExample">
    //                     <div class="card-body">
    //                         <ul>
    //                             <li>Temperature: ${forecast.main.temp}</li>
    //                             <li>Feels Like: ${forecast.main.feels_like}</li>
    //                             <li>Humidity: ${forecast.main.humidity}</li>
    //                             <li>Wind Speed: ${forecast.wind.speed}</li>
    //                             <li>Wind Direction: ${forecast.wind.deg}</li>
    //                             <li>Clouds: ${forecast.clouds.all}</li>
    //                             <li>Weather: ${forecast.weather[0].description}</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             `;
    //         });
    //         $('#accordionExample').html(currentForecastHTML);
    //     });
    // }



});