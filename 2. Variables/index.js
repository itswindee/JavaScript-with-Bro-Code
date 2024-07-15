// variable = a container that stores a value
//            behaves as if it were the value it contains

// 1. declaration    let x;
// 2. assignment     x = 100;

let x; // declaration
x = 100; // assignment
let y = 200; // declaration and assignment
console.log(x);
console.log(y);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

console.log(`You are ${age} years old.`);
console.log(`This price is $${price}.`);
console.log(`Your GPA is ${gpa}.`);

// you can find out the type of a variable using the typeof operator
console.log(typeof age);

// strings
let firstName = `Emily`;
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);

// booleans
let online = true;
console.log(typeof online);
console.log(`Are you online? ${online}`);

let fullName = 'Emily Zhu'
let student = true;
let city = `New York`;

document.getElementById(`myP1`).textContent = fullName;
document.getElementById(`myP2`).textContent = student;
document.getElementById(`myP3`).textContent = city;

document.getElementById(`myP1`).textContent = `My name is ${fullName}`;
document.getElementById(`myP2`).textContent = `Am I student? ${student}`;
document.getElementById(`myP3`).textContent = `I live in ${city}`;

