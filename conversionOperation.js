let score = "100";
console.log(score);
console.log(typeof score);
let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// "100" => 100
//"100abs" => NaN
//true => 1
//false => 0


//convert string  & int into boolean
let isLoggedIn = "true";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);
//1 => true ; 0 => false
//"" => false
//"ak" => true

// convert number into string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);