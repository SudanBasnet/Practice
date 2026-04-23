const Profile = () => {
  return (
    <div>
      <h1>Sudan</h1>
      <p>IT Support Engineer</p>
    </div>
  );
};

export default Profile;


import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default Counter;