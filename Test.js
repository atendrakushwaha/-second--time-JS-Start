console.log("Hello World");
const accountId = 12234;
let accountEmail = "V5Yd4@example.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;
/* 
Prefer not to use var
because of issue in block scope and functional scope.
*/

accountEmail = "ak@123.com";
accountPassword = "123456";
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

