// vanilla js IIFE (Immediately Invoked Function Expression)
// Acts as a "main method" for the script, and is executed immediately
// (()=>{
//     const url = './data/houses.json';
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     fetch(url, options)
//         .then(response => {
//             return response.json();
//         })
//         .then(houses => {
//             console.log(houses);
//             // Filter Method
//             /* A filter is a higher level method that takes a function as an argument
//                 the function returns a condition that is tested against each element in the array
//                 and it returns a new array with the elements that pass the test */
//             // When do you use a filter?
//             // WHEN YOU WANT TO FILTER OUT ELEMENTS FROM AN ARRAY
//             // BASED ON A CONDITION
//             let housesTwoBedsPlus = houses.filter(house =>{
//                 const nmrOfBeds = parseFloat(house.beds);
//                 const nmrOfBaths = parseFloat(house.baths)
//                 return nmrOfBeds >= 5 && nmrOfBaths >= 2;
//             });
//             console.log("Filtered houses => ", housesTwoBedsPlus);

//             // Map Method

//             // When do you use a map?
//             // WHEN YOU WANT TO TRANSFORM EACH ELEMENT IN AN ARRAY
//             // AND RETURN A NEW ARRAY WITH THE TRANSFORMED ELEMENTS
//             let houseNodes = houses.map(house => {
//                 let card = document.createElement('div');
//                 card.innerHTML = `
//                     <h2>${house.address}</h2>
//                     <p>Beds: ${house.beds}</p>
//                     <p>Baths: ${house.baths}</p>
//                 `
//                 return card;
//             })
//             console.log(houseNodes);
//             for(let house of houseNodes) {
//                 document.querySelector('.container').appendChild(house);
//             }


//         });
// })();


(()=>{
    const url = './data/houses.json';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => {
            console.log(houses);
            // Filter Method
            /* A filter is a higher level method that takes a function as an argument
                the function returns a condition that is tested against each element in the array
                and it returns a new array with the elements that pass the test */
            // When do you use a filter?
            // WHEN YOU WANT TO FILTER OUT ELEMENTS FROM AN ARRAY BASED ON A CONDITION
            // When do you use a map?
            // WHEN YOU WANT TO TRANSFORM EACH ELEMENT IN AN ARRAY
            // Example of chaining together filter and map
            // first filters out houses with 5 or more beds and 2 or more baths
            // then reforms each iteration of the filtered array into html nodes
            let filteredHouses = houses.filter(house =>{
                const nmrOfBeds = parseFloat(house.beds);
                const nmrOfBaths = parseFloat(house.baths)
                return nmrOfBeds >= 5 && nmrOfBaths >= 2;
            }).map(house => {
                let card = document.createElement('div');
                card.classList.add('house-card');
                let price = parseFloat(house.price).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                card.innerHTML = `
                    <div class="img-wrapper">
                        <img src="https://via.placeholder.com/300x200" alt="House Image">
                    </div>
                    <div class="d-flex flex-column gap-5">
                        <h2>${house.address}</h2>
                        <h3>${price}</h3>
                        <p>Beds: ${house.beds}</p>
                        <p>Baths: ${house.baths}</p>
                    </div>
                `
                return card;
            });

            //then appends each node to the DOM
            for(let house of filteredHouses) {
                document.querySelector('#houses').appendChild(house);
            }

            // Reduce Method
            // When do you use a reduce?
            // WHEN YOU WANT TO REDUCE AN ARRAY TO A SINGLE VALUE

            // find the most expensive house
            const largestPrice = houses.reduce(/*function parameter*/ (accumulator, house, index)=>{
                    let price = parseFloat(house.price);
                    if (price > accumulator) {
                        accumulator = price;
                    }
                    return accumulator;
                },
                /* initial value for accumulator */ 0);
            console.log("most expensive => ", largestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

            // find the least cheapest house
            const cheapestPrice = houses.reduce(/*function parameter*/ (accumulator, house, index)=>{
                    let price = parseFloat(house.price);
                    if (price < accumulator) {
                        accumulator = price;
                    }
                    return accumulator;
                },
                /* initial value for accumulator */ parseFloat(houses[0].price));
            console.log("least expensive => ", cheapestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

            // find the total market value of all houses for sale
            const allPrices = houses.reduce(/*function parameter*/ (accumulator, house, index)=>{
                    let price = parseFloat(house.price);
                    accumulator += price;
                    return accumulator;
                },
                /* initial value for accumulator */ parseFloat(houses[0].price));
            console.log("total market cost => ", allPrices.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
            // How many houses were for sale in 2022?
            // what was the most expensive house?
            // what was the cheapest house?
            // what was the total market value of all houses for sale?
            const dashboardObject = houses.reduce((accumulator, house, index) => {
                accumulator.totalHouses += 1;
                let price = parseFloat(house.price);
                if (price > accumulator.mostExpensive) {
                    accumulator.mostExpensive = price;
                }
                if (price < accumulator.cheapestHouse) {
                    accumulator.cheapestHouse = price;
                }
                accumulator.totalMarketValue += price;
                return accumulator;
            }, {
                totalHouses: 0,
                mostExpensive: 0,
                cheapestHouse: parseFloat(houses[0].price),
                totalMarketValue: 0
            });
            console.log(dashboardObject);
        });
})();