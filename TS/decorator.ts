function readonly(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
}

class Example {
  @readonly
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

let example = new Example("hello, world");
example.message = "goodbye, world"; // error: cannot assign to read-only property
console.log(example.message); // "hello, world"
