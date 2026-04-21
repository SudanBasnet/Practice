// / HOISTING example
console.log(message); // undefined (var is hoisted)
var message = "Fetching users...";

// CLOSURE example
const createCounter = () => {
  let count = 0;

  return () => {
    count++;
    console.log("API called:", count, "times");
  };
};

const counter = createCounter();
