var myVariable = 5;

// This is an in-line comment.

/*
* This is is a 
multi-line comment
*/

/**
boolean
string
bigint
number
object
symbol
null
undefined
*/

myVariable = 8;

var myString = "Hello";

console.log(myVariable);
console.log(myString);

var myNumber = "";

var calculation = myNumber + 5;

console.log(myNumber);
console.log(calculation);

console.log(typeof calculation);

var myString = "Vanier";

console.log(myString);

let myInteger = 10;
myInteger = 12;

console.log(myInteger);

const THE_COLLEGE = "Vanier College";

console.log(THE_COLLEGE);

myInteger++;
console.log(myInteger);

myInteger--;
console.log(myInteger);

let myCalc = 2.5 + 3.7;
console.log(myCalc);

console.log(Math.floor(myCalc));

myCalc += 4.3;
console.log(myCalc);

let myQuote = 'Alan said,\n "Peter is coming"';

console.log(myQuote);

let myConcat = "This is " + " a tutorial";
console.log(myConcat);

myConcat += " on Javascript";
console.log(myConcat);

console.log(myConcat.length);

const myName = "Adin Ashby";
const firstLetter = myName[0];

console.log(firstLetter);

myName[0] = "F";
console.log(myName);

console.log(myName[myName.length - 1]);
console.log(myName[myName.length - 2]);

const colleges = ["Vanier", "Dawson", "John Abbot"];

console.log(colleges);

const grades = [
  ["James", 75],
  ["John", 95, 85],
];

console.log(grades);

console.log(grades[0][0]);

colleges[2] = "Vieux Montreal";

console.log(colleges);

console.log(grades[1][2]);

colleges.push("NewCollege");
console.log(colleges);

colleges.pop();
console.log(colleges);

colleges.shift();
console.log(colleges);

colleges.unshift("Vanier College");
console.log(colleges);

function myCalculations() {
  console.log("Do some calculations...");
}

myCalculations();

function addNumbers(num1, num2) {
  console.log(myName);
  let myTestVariable = 99;

  return num1 + num2;
}

console.log(addNumbers(5, 7));

if (addNumbers(5, 6) == 11) {
  console.log("It's 11 !");
} else {
  console.log("It's not 11 !");
}

// console.log(myTestVariable); error

console.log(true == 1);
console.log(1 == 1);
console.log(true === 1);
