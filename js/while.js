'use strict'
//2 to 65536 (#1.1)
// for(let i = 2; i <= 65536; i *= 2){
//     console.log(i);
// }


//#1.2
// function doubleInput(num){
//     while(true){
//         console.log(num);
//         num *= 2;
//         if(num > 66000) break;
//     }
// }
// doubleInput(2)

//
// Ice Cream Seller (#1.1)
// let allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     let cones = Math.floor(Math.random() * 5) + 1;
//
//     if (cones > allCones) {
//         console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
//     } else {
//         allCones -= cones;
//         console.log("I sold " + cones + " cones.");
//     }
// }
//
// while (allCones > 0);
// console.log("Yay! I sold them all!")


//#1.2
// function sellMyCones(){
//     const allCones = Math.floor(Math.random() * 50) + 50;
//     console.log(`I have ${allCones} at the start f my day`);
//     do{
//         const customerCones = Math.floor(Math.random() * 5) + 1;
//         if(allCones - customerCones < 0){
//             console.log(`I can't sell ${customerCones} cones, I only have ${allCones}`);
//             continue;
//         } else if(allCones - customerCones === 0){
//             console.log(`Yay! I sold them all!`);
//             break;
//         } else {
//             console.log(`${customerCones} cones sold.`);
//             allCones -= customerCones;
//         }
//         console.log(`I now have ${allCones} cones left`);
//     } while(true);
// }
// sellMyCones()