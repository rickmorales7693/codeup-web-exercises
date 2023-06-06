//#1
const num = parseInt(prompt('Enter a number 1 through 10'));
for (let i = 1; i <= 10; ++i) {
    const result = i * num;
    console.log(`${num} * ${i} = ${result}`);
}

//#2
for (let i = 0; i < 10; ++i) {
    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

//#3
for (let i = 1; i <= 9; ++i) {
    let result = [];
    for (a = 1; a <= i; ++a){
        result.push(i);
    }
    console.log(result.join(""));
}

//#4
for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}
