import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  return (
    <>
      <h3>{count}</h3>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(event) => setAmount(parseInt(event.target.value))}
      />
      <div>
        <button onClick={() => setCount(amount)}>Set Count</button>
      </div>
      <div>
        <select multiple>
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
          <option value="4">D</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-uploader">Upload file</label>
        <input id="file-uploader" type="file" />
      </div>
    </>
  );
}

export default Counter;
