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

// ==========================
// 💾 WRITE FILE
// ==========================
const saveTasks = async (tasks) => {
  await fs.writeFile(FILE, JSON.stringify(tasks, null, 2));
};

// ==========================
// ➕ ADD TASK
// ==========================
const addTask = async (text) => {
  const tasks = await readTasks();

  const newTask = {
    id: Date.now(),
    text,
  };

  tasks.push(newTask); // array method
  await saveTasks(tasks);

  counter(); // closure

  console.log("Task added:", text);
};
