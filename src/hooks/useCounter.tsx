import { useState } from "react";
import { ICounter } from "./counter.type";

const useCounter = ({ initialCount = 0 }: ICounter = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

export default useCounter;
