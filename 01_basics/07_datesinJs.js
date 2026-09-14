// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 25, 5, 3)
// let myCreatedDate = new Date("2026-12-25")
let myCreatedDate = new Date("12-25-2006")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getSeconds());
// console.log(newDate.getMinutes());

newDate.toLocaleString('default', {
    weekday: "long"
})