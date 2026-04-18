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
