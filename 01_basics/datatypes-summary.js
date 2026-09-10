// Primitive

// 7 types : String, Number, Boolean, Null,  undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('565')
const anotherId = Symbol('565')

console.log(id === anotherId);

// const bigNumber = 569752349528657324953n


// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Harsh jain",
    age : 20,
}

const myFunction = function() {
console.log("Hello world");
}

console.log(typeof anotherId);




// ------------------------------------------------//---------------------------------------------------//

// stack (Primitive), Heap (Non-Primitive)

let myEmail = "hj6110195@gamil.com"

let anothername = myEmail
anothername = "Chandresh"

console.log(myEmail);
console.log(anothername);

let userOne  = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Harsh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


