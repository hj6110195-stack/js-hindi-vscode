const name = "Harsh jain "
const repoCount = 45

console.log(name + repoCount + " value");
// console.log('Hello my name is ${name} and my repo Count is $ {repoCount}');

const gameName = new String('Harsh-jain-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(1, 5)
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newStringOne = "  Harsh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harsh.com/harsh%75jain"
console.log(url.replace('%75', '-'));

console.log(url.includes('harsh'));
console.log(gameName.split('-'));