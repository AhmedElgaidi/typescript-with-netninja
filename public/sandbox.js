// const circum = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circum(2))
// Explicit data types
let userAddress;
let userAge;
let isUserLoggedIn;
userAge = 3;
console.log(userAge);
// Create array of strings explicitly
let users;
users = ["one", "two"];
// create an empty array, so we can use push() on it
let newUsersArr = [];
newUsersArr.push("test");
// Create a mixed array of strings, numbes, boolean data types.
// Union types
let mixedArr = []; // now we can push values with any type of those 3 data types
mixedArr.push(1);
let uid; // the value could be either number of string.
// Explicitly declare object data type
let objectOne;
objectOne = {
    name: "ahmed",
    age: 33,
};
// but, we can use this variable to declare an array, because array is actulally an object
// If we want to only accept object, we do it this way (we define the properties before assigning value to it)
let objectTwo;
// Any data type
let age3 = 23; // let's intialize it with 23
age3 = "test";
age3 = {
    name: "ali",
    isAdmin: true,
};
console.log(age3);
// any data type with mixed array
let mixedArr2 = [];
mixedArr2.push("one");
mixedArr2.push(2);
mixedArr.push(false);
console.log(mixedArr2);
// same with object
let object3 = { name: "ahmed", age: 30 };
console.log(object3);
// To define a function to a variable explicitly
let greet;
greet = () => console.log("hi");
// console.log(greet());
const add = (a, b, c, // optional value
d = "result" // intial value
) => {
    console.log(c);
    console.log(d);
    return a + b;
};
// Note: let the optional values at the end, for not conflecting with other values.
add(1, 2, "test");
const result = add(1, 2, "test"); // the variable will take the date type of the returned value (numberI)
// result = "test"
// Or we could add the follows to make it easier to notice durig reading
// let function = ():number => {}
// Note: "void" means the function is not returning any value
// Aliases
const greetUser = (user) => {
    console.log(`Hello, ${user.name}`);
};
// console.log(greetUser({name: 'ahmed'}));
// Function signature => Define structure of the function
// Classes
import { Invoice } from "./classes/Invoice.js";
// Let's create object
const invoiceOne = new Invoice("Ahmed", "built a website", 300);
console.log(invoiceOne);
console.log(".................");
// Note, if i want to create a variable and assign it only objects from this class, we do it this way
let invoicesList = [];
invoicesList.push(invoiceOne);
// We can change the properties values of the object but "with the same defined data type"
console.log(invoicesList);
// now this interface defines a structure (enforces some rules) for any varible that may declare itself as IsPerson
const me = {
    name: "ahmed",
    age: 30,
    sayHi(friend) {
        console.log(`Hello, ${friend}`);
    },
    sayBye(friend) {
        console.log(`Good bye, ${friend}`);
    },
    calc(num1, num2) {
        return num1 + num2;
    },
};
console.log(me);
