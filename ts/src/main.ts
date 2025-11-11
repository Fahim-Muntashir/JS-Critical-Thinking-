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

const createArrywithGeneric=<T>(value<T>)=>{
  return [value]
}