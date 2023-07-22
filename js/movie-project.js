const url = `https://api.themoviedb.org/3/movie/550?api_key=${MOVIE_PROJECT}`

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${MOVIE_PROJECT}`
    }
};

fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));