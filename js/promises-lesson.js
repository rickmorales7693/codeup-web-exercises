const getPerson = (id) => {
    //define the url argument for the fetch
    const url = `https://swapi.dev/api/people/${id}`;
    //define the options argument for the fetch
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //redundant
        }
    }
     return fetch(url, options) // return the entire fetch outside the function
        .then((response)=>{
            return response.json();
        })
         .catch(error => { // catch any errors that might occur
             console.log(error.message);
         })
        //  .then((data)=>{
        // console.log(data);

}

const getFilm = (url) => {
    //define the url argument for the fetch
    const filmUrl = url;
    //define the options argument for the fetch
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",  //redundant
        }
    };
    return fetch(url, options) // return the entire fetch outside the function
        .then((response)=>{
            return response.json();
        })
        .catch(error => { // catch any errors that might occure
            console.log(error.message);
        })

}

(()=>{ // IIFE (Immediately Invoked Function Expression)

    // call the function that has the fetch
    // but remember you're still working with a promise stream
    // and have to chain into a .then()
    getPerson(1).then((person)=>{
        console.log(person);
       getFilm(person.films[0]).then(film => {
           console.log(film);
       })
    });






















})();