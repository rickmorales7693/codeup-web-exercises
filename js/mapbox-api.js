$(() => {

    //Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();

    //Functions
    //Function that initializes the map
    function initializeMap(){
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
    function createMarker(){
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }

    //Function that creates a popup
    function createPopup(){
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
                <div>   
                    <h1>Codeup</h1>
                    <p>We can put anything we want</p>
                </div>
            `);
    }


    //Function that brings me to paris
    function goToParis(){
        geocode('Paris', MAPBOX_PROJECT).then((data) => {
            console.log(data);
            map.setCenter(data);

        })
    }


    //Function that uses reverse geocoding
    //Takes the coordinates from the center of te map and prints
    function findAndPrintAddress(){
        const coords = map.getCenter()
        reverseGeocode(coords, MAPBOX_PROJECT).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`;
        });
    }


    //Function that uses geocode to take the string The Alamo, San Antonio and get coordinates to set a marker and popup
    function markAlamo() {
        geocode('The Alamo, San Antonio', MAPBOX_PROJECT).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML('<p>Remember the Alamo</p>');
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(alamoPopup)
                .addTo(map);
            alamoPopup.addTo(map);
        });
    }

    //Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis);
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress);
    // document.querySelector('#find-address').addEventListener('click', findAndPrintAddress);
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo);



    //Runs when the program loads
    map.setZoom(15);
    marker.setPopup(popup);




















});