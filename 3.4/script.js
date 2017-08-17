//Zadanie pierwsze
const x = "hello";
const y = "world";
console.log(`${x} ${y}`);

//Zadanie drugie
const multiply = (a, b = 1) => {return a*b};
console.log(multiply(5, 2));

//Zadanie trzecie
const average = (...nums) => nums.reduce((a,b) => a+b)/nums.length;
console.log(average(2, 3, 4));

//Zadanie czwarte
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Zadanie piate
const weird = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,second, ,fourth] = weird;
console.log(`${second} ${fourth}`);