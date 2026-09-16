// array
const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["shaktiman", "sharukhkhan", "salmaan khan", "Harsh vardhan"]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[2]);


// Array methods

// myArr.push(5)
// myArr.push(7)
// myArr.push()

// myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(newArr);

// console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 5)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 5)
console.log("C", myArr);

console.log(myn2);
