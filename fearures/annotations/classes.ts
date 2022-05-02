// Classes -> blueprint to create an object with some fields(values) and methods(functions) to represent a thing

// Modifier
// public: this method can be called anywhere, anytime
// private: this method can only be called by other methods in this class
// protected: this method can be called by other methods in this class, or by other method in child classes(we can't change modifier in child class)

class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
// vehicle.honk();
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // notice don't set color 'public'
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
// car.honk();
