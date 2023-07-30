import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h3>{count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
