// singleton 
//Object create
// Object literals
const mysym = Symbol("Krishna")
const JsUser = {
    name: "Harsh",
    "full name": "Harsh Jain",
    [mysym]: "Krishna",
    age: 19,
    location: "Vidisha",
    email: "hj6110195@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "harsh@google.com"
// Object.freeze(JsUser)
JsUser.email = "harsh@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
JsUser.greetingTwo = function(){
    console.log("Hello Js Harsh");
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


