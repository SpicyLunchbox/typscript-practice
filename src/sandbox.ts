// initialize compile and watch with tsc sandbox.ts -w
// with tsconfig.json, only tsc -w is required
// typescript uses inference to determine what type a variable is
// typescript utilizes strict type

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

// line below won't work
// ninja.skills = ['fighting', 'sneaking']

// initializes the variable and declares its type
let example: string;
let year: number;
let isLoggedIn: boolean;

// an array of strings
let foods: string[];

// union types

// this variable can be an array with strings and numbers
let mixedArr: (string | number)[] = [];

let uid: string | number;

let ninjaOne: object;

let ninjaTwo: {
	name: string;
	age: number;
	belt: string;
};

// any allows for dynamic typing
let chocolate: any;
