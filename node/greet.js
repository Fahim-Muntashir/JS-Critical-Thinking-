const args = process.argv;

const name = args[2] || "guest";

const time = new Date().getHours();

let greeting;

if (time < 12) {
  greeting = "Good Morting";
} else if (time < 18) {
  greeting = "good afternoon";
} else {
  greeting = "Good Evening";
}

console.log(`${greeting} ${name}`);
