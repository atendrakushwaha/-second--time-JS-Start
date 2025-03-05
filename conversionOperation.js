// let score = "100";
// console.log(score);
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// // "100" => 100
// //"100abs" => NaN
// //true => 1
// //false => 0


// //convert string  & int into boolean

// let isLoggedIn = "true";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// //1 => true ; 0 => false
// //"" => false
// //"ak" => true

// // convert number into string
// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// //Operations
// let value = 3;
// let negValue = -value;
// console.log(negValue);
// // console.log(2 + 2);
// // console.log(2 - 2);
// // console.log(2 * 2);
// // console.log(2 / 2);

// let str1 = "Hello";
// let str2 = "World";
// let str3 = str1 + str2;
// console.log(str3);

// let str4 = "10";    
// let str5 = "20";
// let sum = Number(str4) + Number(str5);
// console.log(sum);
// console.log("10"+ 2 +2);
// console.log(2 + 2 + "10");
// console.log("10"- 2 - 2);
// console.log(2 - 2 - "10");
// console.log("10"* 2 * 2);
// console.log(2 * 2 * "10");   
// console.log("10"/ 2 / 2);
// console.log(2 / 2 / "10");
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1, num2, num3);

// let gameCounter = 100;
// gameCounter++;
// ++gameCounter;
// console.log(gameCounter);


// Comparison  Operator 


// let value1 = 3;
// let value2 = 4;
// console.log(value1 > value2);
// console.log(value1 < value2);
// console.log(value1 >= value2);
// console.log(value1 <= value2);
// console.log(value1 == value2);
// console.log(value1 != value2);
// console.log("1" === 1);


// PRIMIVITE DATA TYPE -------------
// 7 types
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let email = undefined;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
console.log(email)

// Reference Data Type -------
// Arrays, Objects , functions

const heros = ["shaktiman", "naagraj", "doga"]; //index based collection Array
//create a object
let myObj = {
    name: "Atendra",
    age: 18,
}
console.log(typeof myObj.name);
//function
const myFunction = function () {
    console.log("Hello World");
}
console.log(typeof myFunction);
