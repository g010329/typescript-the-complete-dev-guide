// Classes -> blueprint to create an object with some fields(values) and methods(functions) to represent a thing

class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();
car.drive();
car.honk();
