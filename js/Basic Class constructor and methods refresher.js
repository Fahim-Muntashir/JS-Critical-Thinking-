// class Counter {
//   constructor(count) {
//     this.count = this.count;
//   }
// }

class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1; // শুরুতে কিছু নাই
  }

  push(value) {
    if (this.top === this.stack.length - 1) {
      console.log("Stack Overflow");
      return;
    }
    this.top++;
    this.stack[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      console.log("Stack Underflow");
      return;
    }
    const value = this.stack[this.top];
    this.top--;
    return value;
  }

  peek() {
    return this.top === -1 ? null : this.stack[this.top];
  }
}
