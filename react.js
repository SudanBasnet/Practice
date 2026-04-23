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
