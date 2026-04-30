const Profile = () => {
  return (
    <div>
      <h1>Sudan</h1>
      <p>IT Support Engineer</p>
    </div>
  );
};

export default Profile;

// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// };

// export default Counter;

// 🔹 How this works
// useState(0) → initial value = 0
// count → current value
// setCount() → updates value
// When state changes → UI re-renders automatically 🔄
// 🔹 Simple Understanding
// Concept	Meaning
// Component	UI block
// State	Data inside component
// useState	Hook to manage state

// Real-Life Example

// Think of a component as a TV 📺
// Think of state as the channel

// 👉 Change channel (state) → screen updates automatically

// 🔹 Important Points
// Every component can have its own state
// State changes trigger re-render
// State is local to the component
// Use hooks like useState to manage it

// If you want next level (which you should for MERN 👇):

// Props vs State
// useEffect
// Lifting state up
// Controlled components

// Props = data passed from parent → child component

// Example:
// const Profile = (props) => {
//   return <h1>Hello {props.name}</h1>;
// };

// const App = () => {
//   return <Profile name="Sudan" />;
// };

// 2. useEffect (Side Effects)

// Used for:

// API calls
// Running code on load
// Listening to changes
// Example:
// import { useState, useEffect } from "react";

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, []);

//   return <div>{data.length}</div>;
// };

// 👉 Runs once when component loads

// 🔹 3. Event Handling

// Handling user actions (click, input, etc.)

// <button onClick={() => alert("Clicked!")}>
//   Click Me
// </button>
// 🔹 4. Conditional Rendering

// Show UI based on condition

// const isLoggedIn = true;

// return (
//   <div>
//     {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
//   </div>
// );
// 🔹 5. Lists & Keys

// Rendering multiple items

// const users = ["Sudan", "Ram", "Sita"];

// return (
//   <ul>
//     {users.map((user, i) => (
//       <li key={i}>{user}</li>
//     ))}
//   </ul>
// );

// 👉 key is important for performance

// 🔹 6. Controlled Components (Forms)

// React controls input values

// const [name, setName] = useState("");

// return (
//   <input
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//   />
// );
// 🔹 7. Lifting State Up

// Sharing state between components

// 👉 Move state to parent

// const Parent = () => {
//   const [data, setData] = useState("");

//   return (
//     <>
//       <Child setData={setData} />
//       <h1>{data}</h1>
//     </>
//   );
// };
// 🔹 8. Context API (Global State)

// Avoid prop drilling

// import { createContext, useContext } from "react";

// const MyContext = createContext();

// const App = () => {
//   return (
//     <MyContext.Provider value="Sudan">
//       <Child />
//     </MyContext.Provider>
//   );
// };

// const Child = () => {
//   const data = useContext(MyContext);
//   return <h1>{data}</h1>;
// };
// 🔹 9. useRef

// Access DOM or store value without re-render

// import { useRef } from "react";

// const App = () => {
//   const inputRef = useRef();

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={() => inputRef.current.focus()}>
//         Focus
//       </button>
//     </>
//   );
// };
// 🔹 10. React Router (Navigation)

// Used for multiple pages

// 👉 Library: React Router

// 🔹 11. Custom Hooks

// Reuse logic

// const useCounter = () => {
//   const [count, setCount] = useState(0);
//   return { count, setCount };
// };

// React is a popular JavaScript library for building user interfaces, especially single-page applications. Here’s a clear, beginner-friendly overview of the basics.
