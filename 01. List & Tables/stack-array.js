class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const stack = new Stack();

stack.push("go for walk");
stack.push("buy grocerries");
stack.push("cook dinner");

console.log(stack.toArray());

stack.pop();

console.log(stack.toArray());
