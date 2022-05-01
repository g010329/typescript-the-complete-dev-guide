// Classes -> blueprint to create an object with some fields(values) and methods(functions) to represent a thing

class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
