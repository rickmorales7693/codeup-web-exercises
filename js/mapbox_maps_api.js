$(() => {

    //Global Variables
    const map = initializeMap();
    const marker1 = createMarker1();
    const marker2 = createMarker2();
    const marker3 = createMarker3();
    const popup1 = createPopup1();
    const popup2 = createPopup2();
    const popup3 = createPopup3();


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


    //Function that creates a marker
    function createMarker1() {
        return new mapboxgl.Marker()
            .setLngLat([-98.629830, 29.482480])
            .addTo(map);
    }

    function createMarker2() {
        return new mapboxgl.Marker()
            .setLngLat([-98.698380, 29.509950])
            .addTo(map);
    }

    function createMarker3() {
        return new mapboxgl.Marker()
            .setLngLat([-98.680780, 29.534310])
            .addTo(map);
    }


    //Function that creates a popup
    function createPopup1() {
        return new mapboxgl.Popup()
            .setLngLat([-98.629830, 29.482480])
            .setHTML(`
                <div>   
                    <h1>Elizabeth</h1>
                    <p>Best Mexican Food</p>
                </div>
            `);
    }

    function createPopup2(){
        return new mapboxgl.Popup()
            .setLngLat([-98.698380, 29.509950])
            .setHTML(`
                <div>   
                    <h1>Olive Garden</h1>
                    <p>Best Breadsticks</p>
                </div>
            `);
    }

    function createPopup3(){
        return new mapboxgl.Popup()
            .setLngLat([-98.680780, 29.534310])
            .setHTML(`
                <div>   
                    <h1>Tiu Steppie</h1>
                    <p>Best Italian Sauce</p>
                </div>
            `);
    }


    //Function that uses geocode to take the string The Alamo, San Antonio and get coordinates to set a marker and popup
    function elizabethRestaurant() {
        geocode('Elizabeth Restaurant, San Antonio', MAPBOX_PROJECT).then((data) => {
            const elizabethPopup = new mapboxgl.Popup()
                .setHTML('<p>Delicious Mexican Food</p>');
            const elizabethMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(elizabethPopup)
                .addTo(map);
            elizabethPopup.addTo(map);
        });
    }

    function oliveGarden() {
        geocode('Olive Garden, San Antonio', MAPBOX_PROJECT).then((data) => {
            const olivePopup = new mapboxgl.Popup()
                .setHTML('<p>Delicious Breadsticks</p>');
            const oliveMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(olivePopup)
                .addTo(map);
            olivePopup.addTo(map);
        });
    }

    function tiuSteppie() {
        geocode('Tiu Steppie, San Antonio', MAPBOX_PROJECT).then((data) => {
            const tiuPopup = new mapboxgl.Popup()
                .setHTML('<p>Best Sauce</p>');
            const tiuMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(tiuPopup)
                .addTo(map);
            tiuPopup.addTo(map);
        });
    }


    //Events
    document.querySelector('#elizabeth-restaurant').addEventListener('click', elizabethRestaurant);
    document.querySelector('#olive-garden').addEventListener('click', oliveGarden);
    document.querySelector('#tiu-steppis').addEventListener('click', tiuSteppie);


    //Runs when the program loads
    map.setZoom(9);
    marker1.setPopup(popup1);
    marker2.setPopup(popup2);
    marker3.setPopup(popup3);


});