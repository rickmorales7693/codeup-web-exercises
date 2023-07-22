// USING THE ASYNC/AWAIT SYNTAX TO RESOLVE PROMISES
// Remember, it's just syntactic sugar!
// In the end, it's doing the same thing as the .then() method
// WRITE CODE THAT WORKS!!!
// test url: "https://swapi.dev/api/films/1/"
//tradition declaration
// async function getFilm(url){
// }
//arrow declaration
const getPerson = async (id = 1) => {
    try {
        const url = `https://swapi.dev/api/people/${id}/`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, options);
        const person = await response.json();
        return person;
    } catch(error){
        console.log(error);
    }
}
const getFilm = async (url) => {
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }

}
const getPeople = async () => {
    const url = 'https://swapi.dev/api/people/';
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(url, options);
    const people = await response.json();
    return people;
}

(async ()=>{

    const results = await getPeople();
    console.log(results);
    const people = results.results;
    console.log('Just the people => ', people);
    const peopleRows = people.map((person) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="d-flex gap-10 align-center">
                    <img class="character-image" src="https://via.placeholder.com/50x50">
                    <p class="character-name">${person.name}</p>
                </div>
            </td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.hair_color}</td>
            <td>${person.skin_color}</td>
            <td>${person.eye_color}</td>
            <td>${person.birth_year}</td>
            <td>${person.gender}</td>
            <td><button>delete</button></td>
        `
        let button = row.querySelector('button');
        button.addEventListener('click', ()=>{
            row.remove();
        });
        return row;
    });
    for(let person of peopleRows) {
        document.querySelector('#characters tbody').appendChild(person);
    }


})();