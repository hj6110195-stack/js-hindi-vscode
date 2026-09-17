// const tinderUser = new Object()
//or 
const tinderUser = {}
tinderUser.id = "251206jain"
tinderUser.name = "vijay thalapathy"
tinderUser.isLoggedIn = false
// tinderUser.password = "hj251206"

// console.log(tinderUser);
const regularUser = {
    email: "harsh123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Jain"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj4 = {5: "E", 6: "F"}

// const obj3 = {obj1, obj2}
// or 
// const obj3 = Object.assign({}, obj1, obj2, obj4 )

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 56846,
        email: "hj6110195@gmail.com"
    },

    {
        id: 56846,
        email: "hj6110195@gmail.com"
    },

    {
        id: 56846,
        email: "hj6110195@gmail.com"
    },

    {
        id: 56846,
        email: "hj6110195@gmail.com"
    },

    {
        id: 56846,
        email: "hj6110195@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



