// Type Annotation
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = { x: 10, y: 20 };

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// types:
// 1. primitive types: number, boolean, void, undefined, string, symbol, null
// 2. object types: functions, array, classes, objects

// --- Understanding type inference ---

// let bananas;
// bananas = 2;
// if declaration and initialization are at the same line, Typescript will use type inference for us.
let bananas = 2;
