let ask_name = prompt("Insert Name");
console.log(ask_name)

let ask_surname = prompt("Insert Lastname");
console.log(ask_surname)

let ask_color = prompt("Insert Color");
console.log(ask_color)

const number = 21;
let sum = ask_name + ask_surname + ask_color + number;

document.getElementById("pssw").innerHTML = `Your Password is: ${sum}`;
console.log(`Your Password is: ${sum}`)