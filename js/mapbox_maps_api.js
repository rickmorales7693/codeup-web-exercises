$(() => {

    //Global Variables
    const map = initializeMap();

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
    function elizabethRestaurant() {
        geocode('5251 Timberhill Dr, San Antonio TX 78238', MAPBOX_PROJECT).then((data) => {
            const elizabethPopup = new mapboxgl.Popup()
                .setHTML(`
                    <div>   
                        <h1>Elizabeth's Mexican Restaurant</h1>
                        <p>5251 Timberhill Dr, San Antonio TX 78238</p>
                    </div>
                    `)
            const elizabethMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(elizabethPopup)
                .addTo(map)
            elizabethPopup.addTo(map);

            map.flyTo({
                center: data,
                zoom: 17,
                speed: 1,
                essential: true
            })
        });
    }

    function oliveGarden() {
        geocode('5439 W Loop 1604 N, San Antonio TX 78254', MAPBOX_PROJECT).then((data) => {
            const olivePopup = new mapboxgl.Popup()
                .setHTML(`
                    <div>   
                        <h1>Olive Garden</h1>
                        <p>5439 W Loop 1604 N, San Antonio TX 78254</p>
                    </div>
                    `)
            const oliveMarker = new mapboxgl.Marker()
                .setLngLat([-98.708320, 29.489533])
                .setPopup(olivePopup)
                .addTo(map);
            olivePopup.addTo(map);

            map.flyTo({
                center: data,
                zoom: 17,
                speed: 1,
                essential: true
            })
        });
    }

    function tiuSteppie() {
        geocode('9910 W Loop 1604 N, San Antonio TX 78254', MAPBOX_PROJECT).then((data) => {
            const tiuPopup = new mapboxgl.Popup()
                .setHTML(`
                    <div>   
                        <h1>Tiu Steppie Italian Restaurant</h1>
                        <p>9910 W Loop 1604 N, San Antonio TX 78254</p>
                    </div>
                    `);
            const tiuMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(tiuPopup)
                .addTo(map);
            tiuPopup.addTo(map);

            map.flyTo({
                center: data,
                zoom: 17,
                speed: 1,
                essential: true
            })
        });
    }


    // Reset Button
    $("#reset").click(function () {
        map.flyTo({
            center: [-98.4916, 29.4252],
            zoom: 9,
            speed: 1,
            essential: true
        })
    });

    //Hide Markers
    $('#hide-markers').click(function () {
        $('.mapboxgl-marker').toggle();
    });


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
                speed: 1,
                essential: true
            })
        });
    });


    //Events
    document.querySelector('#elizabeth-restaurant').addEventListener('click', elizabethRestaurant);
    document.querySelector('#olive-garden').addEventListener('click', oliveGarden);
    document.querySelector('#tiu-steppis').addEventListener('click', tiuSteppie);


    //Runs when the program loads
    map.setZoom(9);


});