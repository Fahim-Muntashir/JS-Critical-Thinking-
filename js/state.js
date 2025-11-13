// stateless vs stateful

// Stateful Function
function createCounter() {
  let count = 0; // internal state

  return function () {
    count += 1; // previous state মনে রাখে
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Stateless
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Alice")); // Hello, Alice
console.log(greet("Bob")); // Hello, Bob

// Stateful
function createGreeter() {
  let greetCount = 0;
  return function (name) {
    greetCount += 1;
    return `Hello, ${name}! Greeted ${greetCount} times`;
  };
}

const greeter = createGreeter();
console.log(greeter("Alice")); // Hello, Alice! Greeted 1 times
console.log(greeter("Bob")); // Hello, Bob! Greeted 2 times
console.log(greeter("Alice")); // Hello, Alice! Greeted 3 times

//💡 Tip:

// Stateless functions are easier to test, predictable, side-effect free.

// Stateful functions are needed when you want memory or previous history, like counters, carts, or session tracking.
