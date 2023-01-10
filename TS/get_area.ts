interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

let rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50
let circle = new Circle(5);
console.log(circle.getArea()); // 78.53981633974483
