'use strict'
//#1.1
// let userNumber;
// while (true) {
//     userNumber = parseInt(prompt("Please enter an odd number between 1 and 50:"));
//
//     if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
//         break;
//     } else {
//         alert("Invalid input. Please try again.");
//     }
// }
// const numberToSkip = userNumber;
// for (let i = 1; i <= 49; i++) {
//     if (i === numberToSkip) {
//         console.log(`Yikes! Skipping number: ${numberToSkip}`);
//         continue;
//     }
//     if (i % 2 === 1) {
//         console.log(`Here is an odd number: ${i}`);
//     }
// }


//#1.2
// let userNumber
// do {
//     userNumber = prompt("Please enter an odd number between 1-50?");
//     if(userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0) {
//         alert("Number entered is outside the acceptable range or an even number. Please try again.");
//     }
//     else
//         break;
// } while (true);
// for (let i = 1; i <= 50; i += 2) {
//     if(i == userNumber) {
//         console.log(`Yikes! Skipping over: ${userNumber}`);
//         continue;
//     }
//     console.log(`There is an odd number: ${i}.`);
// }