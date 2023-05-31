"use strict"

console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color")
console.log(userInput + "," + " that's my favorite too!")

/*
Movie Rental
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
how much will you have to pay?//
*/

let dailyRentalRateDollars = 3;

let littleMermaidDaysRented = 3;
let brotherBearDaysRented = 5;
let herculesDaysRented = 1;

let totalRentalCost;

totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;

let mermaidDaysRented = prompt("How many days did you rent Little Mermaid?")
let brotherDaysRented = prompt("How many days did you rent Brother Bear?")
let herculesRented = prompt("How many days did you rent Hercules?")
alert("Your total movie rental cost is " + totalRentalCost)

/*
Contractor
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/

let googleHourlyRateDollars = 400;
let amazonHourlyRateDollars = 380;
let facebookHourlyRateDollars = 350;

let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

let totalPayment;

totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;

let userGoogle = prompt("How many hours did you work for Google?")
let userAmazon = prompt ("How many hours did you work for Amazon?")
let userFacebook = prompt("How many hours did you work for Facebook?")
alert("Your total contract pay is " + totalPayment)

/*
Student Enrollment
A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
*/

let classIsNotFull = true; // boolean
let classScheduleDoesNotConflict = true; // boolean

let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

if(classFull == false && freeSchedule == true){
    console.log("Exercise 3.3: You may attend Class!");
    alert("Exercise 3.3: You may attend Class!");
} else {
    console.log("Exercise 3.3: No class for you...");
    alert("Exercise 3.3: No class for you...");
};

/*
Product Offer
A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a
specific amount of products.
Use the following code to follow the instructions below:
*/

let numberOfItems = 2; // number
let offerIsValid = true; // boolean
let isPremiumMember = true; // boolean

let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

if(offerExpired === false && (itemsBought >= 2 || premiumMember == true)){
    console.log("Exercise 3.4: You get a discount!");
    alert("Exercise 3.4: You get a discount!");
} else {
    console.log("Exercise 3.4: Full Price...");
    alert("Exercise 3.4: Full Price...");
};
