const getPerson = (id) => {
    const url = `https://swapi.dev/api/people/${id}`;
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }
     return fetch(url, options)
        .then((response)=>{
            return response.json();
        })
        //  .then((data)=>{
        // console.log(data);

}

(()=>{ // IIFE (Immediately Invoked Function Expression)

    const luke = getPerson(1).then((data)=>{
        console.log(data);
        const url = data.films[0];
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        };
        fetch(url, options)
            .then((response)=>{
                return response.json();
            })
            .then((film)=>{
                console.log(film);
            })
    });






















})();