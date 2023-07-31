import { useState } from "react";
import { ICounter } from "./counter.type";

const useCounter = ({ initialCount = 0 }: ICounter) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increment, decrement };
};

export default useCounter;
