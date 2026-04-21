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

const counter = createCounter();

// ==========================
// 📁 FILE STORAGE
// ==========================
const FILE = "tasks.json";

// ==========================
// 🧠 READ FILE (ASYNC)
// ==========================
const readTasks = async () => {
  try {
    const data = await fs.readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};
