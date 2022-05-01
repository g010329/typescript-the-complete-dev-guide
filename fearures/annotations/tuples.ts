// Array -> Anytime we need to represent a collection of records with some arbitrary sort order.
// Tuple -> Array-like structure where each element represents some property of a record.

const drink = { color: "brown", carbonated: true, sugar: 40 };

// type alias
type Drink = [string, boolean, number];
// const pepsi: [string, boolean, number] = ["brown", true, 40];
const pepsi: Drink = ["brown", true, 40];
const tea: Drink = ["brown", false, 0];

const carSpec: [number, number] = [400, 3354];
const carStats = { horsepower: 400, weight: 3354 };
