// initialize compile and watch with tsc sandbox.ts -w
// typescript uses inference to determine what type a variable is

let character = "mario";
let age = 30;
let isBlackBelt = false;

// character = 20 won't work
character = "luigi";

// type check is done prior to compile
const circ = (diameter: number) => {
	return diameter * Math.PI;
};

console.log(circ(7.5));

let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// line below won't work
// names.push(3);

// arrays can have mixed types if they are initialized with such
let mixed = ["ken", 4, "chun-li", 8, 9];

let ninja = {
	name: "mario",
	belt: "black",
	age: 30,
};
