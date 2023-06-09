(function() {
    "use strict";


    // let myself = {
    //     height: "5,9",
    //     weight: "222",
    //     ethnicity: "Hispanic",
    // };
    //
    // console.log(myself.height);
    // console.log(myself.weight);
    // console.log(myself.ethnicity);

 //    const cars = [
 //        {
 //            make: "Toyota",
 //            model: "Corolla",
 //            color: "Red",
 //            features: ["Automatic, Bluetooth, GPS"],
 //            owner: {
 //                name: "John Doe",
 //                age: "30",
 //                sayMyName: function (){
 //                    console.log(`${this.name} said hi`)
 //                }
 //            },
 //            honk: function (){
 //                console.log("Car Honked")
 //            }
 //        },
 //        {
 //            make: "Honda",
 //            model: "Accord",
 //            features: ["Automatic, Radio"],
 //            owner: {
 //                name: "Jane Doe",
 //                age: "31",
 //                sayMyName: function (){
 //                    console.log(`${this.model} honked`)
 //                }
 //            },
 //            honk: function (){
 //                console.log("Car Honked")
 //            }
 //        }
 //    ]
 //
 // for(const car of cars){
 //     const features = car.features;
 //     for(const feature of features){
 //         console.log(feature)
 //     }
 // }
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let object = {
        firstName: "Rick",
        lastName: "Sanchez",
    }

    console.log(object.firstName) // "Rick"
    console.log(object.lastName) // "Sanchez"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    let person = {
        firstName: "Rick",
        lasName: "Sanchez",
        sayHello: function (){
            return `Hello from ${this.firstName} ${this.lasName}!`
        }
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    let shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320},
        ];

    shoppers.forEach((shopper) => {
        let amountBeforeDiscount = shopper.amount;
        let discount = 0;
        let amountAfterDiscount = shopper.amount;

        if (shopper.amount > 200) {
            discount = shopper.amount * 0.12;
            amountAfterDiscount = shopper.amount - discount;
        }

        console.log(`${shopper.name} - Amount before discount: $${amountBeforeDiscount.toFixed(2)}, Discount: $${discount.toFixed(2)}, Amount after discount: $${amountAfterDiscount.toFixed(2)}`);
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
            {
                title: "The Salmon of Doubt",
                author: {
                    firstName: "Douglas",
                    lastName: "Adams"
                }
            },
            {
                title: "To Kill a Mockingbird",
                author: {
                    firstName: "Harper",
                    lastName: "Lee"
                }
            },
            {
                title: "The Great Gatsby",
                author: {
                    firstName: "F. Scott",
                    lastName: "Fitzgerald"
                }
            },
            {
                title: "1984",
                author: {
                    firstName: "George",
                    lastName: "Orwell"
                }
            },
            {
                title: "Pride and Prejudice",
                author: {
                    firstName: "Jane",
                    lastName: "Austen"
                }
            }
        ];

    console.log(books[0].title); // "The Salmon of Doubt"
    console.log(books[0].author.firstName); // "Douglas"
    console.log(books[0].author.lastName); // "Adams"


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookNumber = i + 1;
        let authorFullName = book.author.firstName + " " + book.author.lastName;

        console.log("Book number: " + bookNumber);
        console.log("Book title: " + book.title);
        console.log("Author's full name: " + authorFullName);
        console.log('---');
    };


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // Function to create a book object
    function createBook(title, authorName) {
        let names = authorName.split(" ");
        let author = {
            firstName: names[0],
            lastName: names[1]
        };
        return {
            title: title,
            author: author
        };
    };

    // Function to display book information
    function showBookInfo(book) {
        let authorFullName = book.author.firstName + " " + book.author.lastName;

        console.log("Book title: " + book.title);
        console.log("Author's full name: " + authorFullName);
        console.log("---");
    };

    // Loop through the books array and display book information using the showBookInfo function
    books.forEach(function(book, index) {
        let bookNumber = index + 1;

        console.log("Book number: " + bookNumber);
        showBookInfo(book);
    });


})();