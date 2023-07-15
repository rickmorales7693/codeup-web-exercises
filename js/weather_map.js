$(()=>{

    // Base URL for forecast API
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    // Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    //Global Variables
    const map = initializeMap();
    const currentDate = new Date()

    // Current Date Components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDay();

    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    //Function that initializes the map
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

    //Function that Sets a marker and popup
    // function elizabethRestaurant() {
    //     geocode('5251 Timberhill Dr, San Antonio TX 78238', MAPBOX_PROJECT).then((data) => {
    //         const elizabethPopup = new mapboxgl.Popup()
    //             .setHTML(`
    //                 <div>
    //                     <h1>Elizabeth's Mexican Restaurant</h1>
    //                     <p>5251 Timberhill Dr, San Antonio TX 78238</p>
    //                 </div>
    //                 `)
    //         const elizabethMarker = new mapboxgl.Marker()
    //             .setLngLat(data)
    //             .setPopup(elizabethPopup)
    //             .addTo(map)
    //         elizabethPopup.addTo(map);
    //
    //         map.flyTo({
    //             center: data,
    //             zoom: 17,
    //             speed: 1,
    //             essential: true
    //         })
    //     });
    // }

    // Add a text box for the user to enter an address that will use geocoding to center the map and place a marker on that location.
    // $('#search-button').click(function () {
    //     const userInput = $('#search-input').val();
    //     geocode(userInput, MAPBOX_PROJECT).then((data) => {
    //         const popup = new mapboxgl.Popup()
    //         const marker = new mapboxgl.Marker()
    //             .setLngLat(data)
    //             .setPopup(popup)
    //             .addTo(map);
    //         popup.addTo(map);
    //
    //         map.flyTo({
    //             center: data,
    //             zoom: 14,
    //             speed: 1,
    //             essential: true
    //         })
    //     });
    // });

    // OBJECTS------------------------------------------------------------







    // EVENT LISTENERS------------------------------------------------------
    map.setZoom(9);







});