$(() => {

    //Global Variables
    const map = initializeMap();


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




    //Events





    //Runs when the program loads
    map.zoom(15);





















});