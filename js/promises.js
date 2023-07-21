const userName = (id) => {

    const url = `https://api.github.com/users/${id}/events`
    console.log(url);

    const options = {
        method: 'GET',
        headers: {
            "Authorization": `token ${PROMISE_KEYS}`,
        }
    }
    console.log(options);

    return fetch(url, options) // return the entire fetch outside the function
        .then((response)=>{
            return response.json();
        })
        .catch(error => { // catch any errors that might occur
            console.log(error.message);
        })
}


(() => { // IIFE (Immediately Invoked Function Expression)

    userName('rickmorales7693').then((user) => {

        console.log(user[0].actor.login,  user[0].created_at);
    });


})();