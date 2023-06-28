// #2
function showMultiplicationTable(number){
    for(let i = 1; i <= 10; ++i){
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

showMultiplicationTable(parseInt(prompt("Enter a number")));

// #3.1
for (let i = 0; i < 10; ++i) {
    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

// #3.2
function randomEvenOrOdd(){
    for(let i = 0; i < 10; ++i){
        const randomNumber = Math.floor(Math.random() * (200 - 20) + 1) + 20;
        if (randomNumber % 2 === 0) {
            console.log(`${randomNumber} is even`);
        } else {
            console.log(`${randomNumber} is odd`);
        }
    }
}
randomEvenOrOdd()

// #4
for (let i = 1; i <= 9; ++i) {
    let result = [];
    for (a = 1; a <= i; ++a){
        result.push(i);
    }
    console.log(result.join(""));
}

// #4.1
function numPyramid(){
    for(let i = 1; i < 10; i++){
        console.log(`${i.toString().repeat(i)}`);
    }
}
numPyramid()

// #5
for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}