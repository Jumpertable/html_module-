"use client";

import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
          <h2>Count: {count}</h2>
      <button onClick={add} className="bg-blue-600 p-2 border-2">
        {" "}
        +1{" "}
      </button>

      <button onClick={sub} className="bg-red-600 p-2 border-2">
        -1{" "}
          </button>
          
      <button onClick={reset} className="bg-green-600 p-2 border-2">
        reset{" "}
      </button>
    </div>
  );
}
