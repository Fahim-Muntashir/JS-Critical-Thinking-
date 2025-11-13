// const user1: {
//   id: number;
//   name: string;
//   age?: number;
// } = {
//   id: 1,
//   name: "John Doe",
// };

// genericWInterface

// interface Developer<T> {
//   name: string;
//   salarary: number;
//   device: {
//     brand: string;
//     model: string;
//     relasedYear: string;
//   };
//   smartWatch: T;
// }

// const poorDeveloper: Developer<{
//   heartRate: string;
//   stopwatch: boolean;
// }> = {
//   name: "mr poor",
//   salarary: 200,
//   device: {
//     brand: "lenovo",
//     model: "lenovo",
//     relasedYear: "2020",
//   },
//   smartWatch: {
//     heartRate: "80 bpm",
//     stopwatch: true,
//   },
// };

// const richDeveloper: Developer<{
//   heartRate: string;
//   calling: boolean;
//   calculator: boolean;
//   ai: boolean;
// }> = {
//   name: "mr poor",
//   salarary: 200,
//   device: {
//     brand: "hp",
//     model: "hp lenovo",
//     relasedYear: "2025",
//   },
//   smartWatch: {
//     heartRate: "80 bpm",
//     calling: true,
//     calculator: true,
//     ai: true,
//   },
// };

// Problem 1 – String Formatter

// Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided → return the string in uppercase

// If the boolean is false → return the string in lowercase

// const newfunc = (text: string, upper: boolean = true) => {
//   return upper ? text.toUpperCase() : text.toLowerCase();
// };

// console.log(newfunc("new", true));

//Problem 2 – Filter by Rating

// Create a Problem 2 – Filter by Rating

// Create a function that filters an array of objects with a rating property, returning only items with rating ≥ 4.

// Function Signature:

function filterTopRated(items: { title: string; rating: number }[]): {
  title: string;
  rating: number;
}[] {
  return items.filter((item) => item.rating >= 4);
}
// Example usage:
const products = [
  { title: "Product A", rating: 4.5 },
  { title: "Product B", rating: 3.8 },
  { title: "Product C", rating: 4.0 },
];

console.log(filterTopRated(products));
// Output:
// [ { title: 'Product A', rating: 4.5 }, { title: 'Product C', rating: 4 } ]
