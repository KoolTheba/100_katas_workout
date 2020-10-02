// https://www.codewars.com/kata/513e1e47c600c93cef000001
// #fundamentals #OOP

class Animal {
    constructor(name, type) {
      this.type = type;
      this.name = name;
    }
  
    toString() {
      return `${this.name} is a ${this.type}`;
    }
}

// tests
const assert = require("chai").assert;

describe("Solution", () => {
  const dog = new Animal('Max', 'dog');

  it("toString", () => {
    assert.strictEqual(dog.toString(), 'Max is a dog');
  });
  
  it("type property", () => {
    assert.strictEqual(dog.type, 'dog');
  });
  
  it("name property", () => {
  assert.strictEqual(dog.name, 'Max');
  });
});