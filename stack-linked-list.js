import { LinkedList } from "./linkedList.js";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack = new Stack();

stack.push("go for walk");
stack.push("buy grocerries");
stack.push("cook dinner");

console.log(stack.toArray());

stack.pop();

console.log(stack.toArray());
