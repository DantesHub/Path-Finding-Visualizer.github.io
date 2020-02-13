class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return this.items;
  }

  push = element => {
    this.items.push(element);
  };

  pop = () => {
    this.items.pop();
  };

  size = () => {
    return this.items.length;
  };

  isEmpty() {
    return this.items.length === 0;
  }
}

export default Stack;
