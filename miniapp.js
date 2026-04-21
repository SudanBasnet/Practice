// ==========================
// 🔥 HOISTING
// ==========================
console.log(appTitle); // undefined
var appTitle = "CLI Task Manager";

// ==========================
// 📦 MODULES (Node.js)
// ==========================
const fs = require("fs").promises;

// ==========================
// 🔒 CLOSURE (private counter)
// ==========================
const createCounter = () => {
  let count = 0;
  return () => {
    count++;
    console.log("Tasks created:", count);
  };
};
