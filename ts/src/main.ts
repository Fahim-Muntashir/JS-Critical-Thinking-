// Function
// arrow function , normal function

// function addnormal(num2: number, num1: number): number {
//   return num1 + num2;
// }

// const addArraw=()=>{}

// add(2, 3);

//spread operaotor

// const friend = ["abul", "babul", "cabul"];
// const schoolFriends = ["kabul", "mabul", "tabul"];
// const collegeFriends = ["jabul", "gabul", "fabul"];
// const allFriends = [...friend, ...schoolFriends, ...collegeFriends];

//object desrructing
// array destructuring

// const user = {
//   id: 111,
//   name: {
//     firstName: "abul",
//     lastName: "babul",
//   },
//   gender: "male",
//   color: "samla",
// };

// const myFavouriteColor = user?.color ?? "white";

// const { name } = user;

// Generic Function
// const createArrayWithString = (value: string) => value;
// const createArrayWithString = (value: ) => value;

// const createArrywithGeneric=<T>(value:T)=>{
//   return [value]
// }

//constrain : stric rules deya

// keyof : type operator

// type RichPeopleVehicle = {
//   car: string;
//   bike: string;
//   cng: string;
// };

// type myVehicle = "bike" | "car" | "cng";
// type myVehicle1 = keyof RichPeopleVehicle;
// const myVehicle: myVehicle1 = "bike";

// asconst assangtion
// const UserRoles = {
//   Admin: "Admin",
//   User: "User",
//   Guest: "Guest",
// } as const;

// // this is now freekded up
// // UserRoles.Admin = "SuperAdmin";

// // 1.typeof operator
// // 2.keyof operator
// const user={
//   id:222,
//   name:"Fahim",
// }

// typeof user;

//Conditional type : je type condition er upor depend kore

// type A = null;
// type B = undefined;

// type C = A extends null ? true : false;
// map type

// 1 Declare variables with proper primitive types (string, number, boolean, null, undefined).

// let userName: string = "John Doe";
// let age: number = 30;
// let isStudent: boolean = false;
// let address: null = null;
// let phoneNumber: undefined = undefined;

// /2 Create an array of numbers and find the average using a typed variable.

// const numbers: number[] = [10, 20, 30, 40, 50];
// let sum: number = 0;
// for (let num of numbers) {
//   sum += num;
// }
// console.log(`Average: ${sum / numbers.length}`);

// const numbers: Array<number> = [10, 20, 30, 40, 50];

// let sum: number = 0;

// for (let num of numbers) {
//   sum += num;
// }

// console.log(`Average: ${sum / numbers.length}`);

// 3. Define a tuple that holds a person’s name (string), age (number), and active status (boolean).

// const person: [string, number, boolean] = ["Alice", 28, true];
// console.log(`Name: ${person[0]}, Age: ${person[1]}, Active: ${person[2]}`);

// //4 Create an object type for a user having name, email, and optional phone.

// interface User {
//   name: string;
//   email: string;
//   phone?: null;
// }

// const user: User = {
//   name: "Bob",
//   email: "bop@gmial.com",
//   phone: null,
// };

//5 Write a function that takes two numbers and returns their sum (with proper type annotation).
// const sum = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// console.log(`Sum: ${sum(5, 10)}`);

//6. Write a function that accepts an unknown value and checks if it’s a string before returning its length.

// const person = (value: unknown): number | null => {
//   if (typeof value === "string") {
//     return value.length;
//   } else {
//     return null;
//   }
// };

// console.log(person("Hello World"));

// 7. Use rest and spread operators to merge two arrays of numbers.

// const array1: number[] = [1, 2, 3];
// const array2: number[] = [4, 5, 6];
// const mergedArray: number[] = [...array1, ...array2];
// console.log(mergedArray);

// const functions = (...age: number[]): number => {
//   return age.reduce((a, b) => a + b, 0);
// };

// console.log(functions(10, 20, 30, 40, 50));

//Destructure the following object safely:

// const person = { name: "Fahim", info: { age: 22, country: "Bangladesh" } };
// // Extract age using destructuring

// const age = person.info?.age;
// console.log(`Age: ${age}`);

//Create a type alias called Product with properties id, name, price, and optional discount.
// type Porduct = {
//   id: number;
//   name: string;
//   price: number;
//   discount?: number;
// };

// const ProductPinabelle: Porduct = {
//   id: 1,
//   name: "Pinabelle",
//   price: 5000,
// };

//10. Define a union type for a variable that can store either a string (user’s name) or a number (user’s ID).

// type UserIdentifier = string | number;

// const user: UserIdentifier = "Fahim";

// 11. Write a function that uses a ternary operator to check if a number is even or odd.

// const checkEvenOdd = (num: number): string => {
//   const result = num % 2 === 0 ? "Even" : "Odd";
//   return result;
// };

// console.log(checkEvenOdd(7));

//12. Use nullish coalescing (??) to give a default value when a variable is null or undefined.

// const userColor: string | null = null;
// const favoriteColor: string = userColor ?? "Blue";
// console.log(`Favorite Color: ${favoriteColor}`);

// 13.Write a function that never returns (throws an error).

// const throwError = (message: string): never => {
//   throw new Error(message);
// };

// console.log(throwError("This is a fatal error"));
// 14. Create an interface called User with fields id, name, email, and an optional role.

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role?: string;
// }

// 15 .Extend that interface into an Admin interface with extra property permissions: string[].
// interface User {
//   name: string;
//   email: string;
//   phone?: string | null;
// }

// // Extend User to Admin
// interface Admin extends User {
//   permissions: string[];
// }

// // Example of an Admin object
// const adminUser: Admin = {
//   name: "Fahim",
//   email: "fahim@example.com",
//   permissions: ["read", "write", "delete"],
// };

// console.log(adminUser);

//16. Create a generic function that takes any value and returns it.

// function identity<T>(value: T): T {
//   // your code
//   return value;
// }

// console.log(identity<string>("Hello TypeScript"));
// console.log(identity<number>(42));
// console.log(identity<boolean>(true));

//17. Define a generic interface for a key-value pair.
//18. Create a generic interface called Box<T> that holds a value of type T.

interface Box<T> {
  value: T;
}

//19; Write a generic function that takes an array and returns its first element.

//20. Add a constraint: only accept arrays that contain elements with a length property.

// Create a keyof generic function that returns a property value from an object safely.

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//    // your code
// }

// 🧩 Level 4 (Enums, Conditional & Utility Types)

// Create an enum for user roles: ADMIN, EDITOR, VIEWER.

// Replace that enum with a const object and use as const to achieve the same behavior.

// Use a conditional type to check if a type extends string.

// type CheckType<T> = T extends string ? "String" : "Not String";

// Create a mapped type that makes all fields of a User type optional

// Use utility types:

// Partial<User>

// Pick<User, "name" | "email">

// Omit<User, "id">

// Readonly<User>
