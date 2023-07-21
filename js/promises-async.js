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

(async ()=>{
    const luke = await getPerson(1);
    console.log(luke);
    const firstFilm = await getFilm(luke.films[0]);
    console.log(firstFilm);

})();
