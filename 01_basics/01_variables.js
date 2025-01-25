const accountId = 144553
let accountEmail ="soulf032@gmail.com"
let accountPassword = "12345"
accountCity = "Kolkata" // not a good way to assign a variable
let accountState;


// accountId = 2      not allowed bcz of const

/*
prefer not to use var
bcz of issue in block scope and functional scope

*/

accountEmail = "test@gmail.com"
accountPassword = 65234
accountCity = "Mumbai"


// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

