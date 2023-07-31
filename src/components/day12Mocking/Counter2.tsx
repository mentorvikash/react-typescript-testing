import { useState } from "react";
import { ICounter2 } from "./Counter2.type";

function Counter2({ count, handleIncrement, handleDecrement }: ICounter2) {
  // const [count, setCount] = useState<number>(0);
  // const handleIncrement = () => setCount(count + 1);
  // const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter2;
