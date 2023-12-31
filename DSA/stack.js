class Stack {
  constructor() {
    this.stack = [];
  }
  // insert elements into the stack
  // [1, 10, -1]
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.stack.length <= 0) return -1;
    let poppedElement = this.stack[this.stack.length - 1];
    this.stack.pop();
    return poppedElement;
  }
  length(){
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    if (this.stack.length <= 0) return -1;
    let peekedElement = this.stack[this.stack.length - 1];
    return peekedElement;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(-10);
stack.push(5);
stack.push(3);
stack.push(8);
console.log(stack.stack);
console.log(stack.pop());
console.log(stack.stack);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.length());
