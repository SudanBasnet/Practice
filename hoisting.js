console.log(a); // undefined
var a = 10;
// Hoisting = JavaScript moves declarations to the top of their scope before execution.
var a; // hoisted
console.log(a); // undefined
a = 10;
// var is hoisted and initialized with undefined

// important
console.log(b); // ❌ ReferenceError
let b = 20;
// 👉 Why?

// They are hoisted BUT not initialized
// They stay in Temporal Dead Zone (TDZ)

// hoisted but NOT usable
let b; // (in TDZ)

console.log(b); // ❌ error
b = 20;

//hoisting for function
sayHello(); // works

function sayHello() {
  console.log("Hello");
}

sayHi(); // ❌ error

const sayHi = function () {
  console.log("Hi");
};

var x = 5;

function test() {
  console.log(x); // undefined
  var x = 10;
}

test();

function test() {
  var x; // hoisted inside function
  console.log(x); // undefined
  x = 10;
}

console.log(a); // undefined
var a = 1;

function abc() {
  console.log(a); // undefined
  var a = 2;
}

abc();
