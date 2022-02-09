// initialize compile and watch with tsc sandbox.ts -w
// typescript uses inference to determine what type a variable is
var character = "mario";
var age = 30;
var isBlackBelt = false;
// character = 20 won't work
character = "luigi";
// type check is done prior to compile
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
var names = ["luigi", "mario", "yoshi"];
names.push("toad");
// line below won't work
// names.push(3);
// arrays can have mixed types if they are initialized with such
var mixed = ["ken", 4, "chun-li", 8, 9];
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
