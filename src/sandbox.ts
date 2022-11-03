// const circum = (diameter: number) => {
//     return diameter * Math.PI;
// }

// console.log(circum(2))

// Explicit data types
let userAddress: string;
let userAge: number;
let isUserLoggedIn: boolean;

userAge = 3;
console.log(userAge);

// Create array of strings explicitly
let users: string[];
users = ["one", "two"];

// create an empty array, so we can use push() on it

let newUsersArr: string[] = [];
newUsersArr.push("test");

// Create a mixed array of strings, numbes, boolean data types.
// Union types
let mixedArr: (string | number | boolean)[] = []; // now we can push values with any type of those 3 data types
mixedArr.push(1);

let uid: string | number; // the value could be either number of string.

// Explicitly declare object data type

let objectOne: object;

objectOne = {
  name: "ahmed",
  age: 33,
};
// but, we can use this variable to declare an array, because array is actulally an object

// If we want to only accept object, we do it this way (we define the properties before assigning value to it)
let objectTwo: {
  name: string;
  age: number;
  isAdmin: boolean;
};

// Any data type
let age3: any = 23; // let's intialize it with 23
age3 = "test";
age3 = {
  name: "ali",
  isAdmin: true,
};
console.log(age3);

// any data type with mixed array
let mixedArr2: any[] = [];
mixedArr2.push("one");
mixedArr2.push(2);
mixedArr.push(false);
console.log(mixedArr2);

// same with object

let object3: {
  name: any;
  age: any;
} = { name: "ahmed", age: 30 };

console.log(object3);

// To define a function to a variable explicitly

let greet: Function;

greet = () => console.log("hi");
// console.log(greet());

const add = (
  a: number,
  b: number,
  c?: string | number, // optional value
  d: string = "result" // intial value
): number => {
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
const greetUser = (user: objectWithName) => {
  console.log(`Hello, ${user.name}`);
};

type objectWithName = { name: string; uid: string | number };

// console.log(greetUser({name: 'ahmed'}));

// Function signature => Define structure of the function

// Classes

import { Invoice } from "./classes/Invoice.js";

// Let's create object

const invoiceOne = new Invoice("Ahmed", "built a website", 300);
console.log(invoiceOne);
console.log(".................");

// Note, if i want to create a variable and assign it only objects from this class, we do it this way
let invoicesList: Invoice[] = [];

invoicesList.push(invoiceOne);

// We can change the properties values of the object but "with the same defined data type"

console.log(invoicesList);

/// What if we don't want users/ or may be other developers change the values? (Add limits?)
// Here, comes (prive, pulbic, readonly) => Called modifiers

// Note: All classes are public my default
// Look at the above class again

// invoiceOne.client = "Elbotanist";

// Modules:

// Interfaces: to define a structure of the value that may be assigned to a certain variable
interface IsPerson {
  name: string;
  age: number;
  sayHi(a: string): void;
  sayBye(a: string): void;
  calc(a: number, b: number): number;
}

// now this interface defines a structure (enforces some rules) for any varible that may declare itself as IsPerson
const me: IsPerson = {
  name: "ahmed",
  age: 30,
  sayHi(friend: string): void {
    console.log(`Hello, ${friend}`);
  },
  sayBye(friend: string): void {
    console.log(`Good bye, ${friend}`);
  },
  calc(num1: number, num2: number): number {
    return num1 + num2;
  },
};

console.log(me)