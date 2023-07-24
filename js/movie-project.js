const url = `https://api.themoviedb.org/3/movie/550?api_key=${MOVIE_PROJECT}`

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `token ${MOVIE_PROJECT}`
    }
};

fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));








(async ()=>{











})();