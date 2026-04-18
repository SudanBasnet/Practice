console.log("Start");

console.log("Task 1");
console.log("Task 2");

console.log("End");
//Start
// Task 1
// Task 2
// End

// 👉 Simple, predictable, but can be slow/blocking

// 🔥 2. Asynchronous (Async)

// 👉 Tasks can run in the background
// 👉 JS does NOT wait → moves to next line

console.log("Start");

setTimeout(() => {
  console.log("Task 1");
}, 2000);

console.log("End");

// ❌ Sync (bad for heavy tasks)
const data = getDataFromServer(); // takes 5 sec
console.log(data);

// 👉 UI freezes 😓

//good practice
getDataFromServer().then((data) => {
  console.log(data);
});

//🧠 5. Async Types in JS
// setTimeout, setInterval
// Promises (.then)
// async/await
// API calls (fetch)

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

// 1
// 3
// 2

// 👉 Even 0ms delay runs later → because of event loop

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
