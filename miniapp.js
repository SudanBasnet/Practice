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

// ==========================
// ❌ DELETE TASK
// ==========================
const deleteTask = async (id) => {
  let tasks = await readTasks();

  tasks = tasks.filter((t) => t.id !== id);

  await saveTasks(tasks);
  console.log("Task deleted:", id);
};

// ==========================
// 📋 LIST TASKS
// ==========================
const listTasks = async () => {
  const tasks = await readTasks();

  console.log("\nYour Tasks:");
  tasks.forEach((t) => console.log(`${t.id} - ${t.text}`));
};

// ==========================
// 🌐 FETCH API (ASYNC)
// ==========================
const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) throw new Error("API Failed");

    const users = await res.json();

    console.log("\nUsers from API:");
    users.map((u) => console.log(u.name)); // map
  } catch (err) {
    console.log("Error:", err.message);
  }
};

// ==========================
// 🔄 EVENT LOOP DEMO
// ==========================
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// ==========================
// 🚀 RUN APP
// ==========================
const run = async () => {
  await addTask("Learn JavaScript");
  await addTask("Practice coding");

  await listTasks();

  const tasks = await readTasks();

  if (tasks.length > 0) {
    await deleteTask(tasks[0].id);
  }

  await listTasks();

  await fetchUsers();
};

run();
