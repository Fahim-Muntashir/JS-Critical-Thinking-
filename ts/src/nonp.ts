// //array, object

// let bazarlist: string[] = ["rice", "potato", "onion"];

// // bazarlist.push(12);     //wrong
// bazarlist.push("tomato");

// let mixedArray: (string | number | boolean)[] = ["apple", 45, true, "milk", 12];

// let coordidate: [number, number] = [34, 78];

// let couple: [string, string] = ["husband", "wife"];

//reference type: object
const user: {
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
} = {
  firstName: "Fahim",
  lastName: "Shovon",
  age: 25,
};

user.firstName = "F";

console.log(user);
