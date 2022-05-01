// Type annotation for functions:
// code we add to tell Typescript what type of arguements a function will receive and what type of values it will return.
// Type inference for functions:
// Typescript tries to figure out what type of value a function will return.

const add = (a: number, b: number): number => {
  return a + b;
};

// const substract = (a: number, b: number) => {
//   a - b;
// };
// may cause error => we should always use return annotation
const substract = (a: number, b: number): number => {
  return a - b;
};

function devided(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
// const throwError2 = (message: string): string => {
//   if (!message) {
//     throw new Error(message);
//   }
//   return message;
// };
// const throwError3 = (message: string): void => {
//   if (!message) {
//     throw new Error(message);
//   }
// };
