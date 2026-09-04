const accountID = 144553
let accountEmail = "hj6110195@gmail.com"
var accountPassword ="251206"
accountCIty = "Vidisha"

// accountID = 144553  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "13468"
accountCIty = "Basoda"
accountstate = "Madhya Pradesh";

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCIty, accountstate]);
