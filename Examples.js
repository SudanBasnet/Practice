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

// ASYNC/AWAIT + PROMISE
const fetchUsers = async () => {
  try {
    counter(); // closure in action

    const res = await fetch("https://jsonplaceholder.typicode.com/users"); // async
    const data = await res.json();

    displayUsers(data);
  } catch (err) {
    console.log("Error:", err);
  }
};
