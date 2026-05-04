import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// Explanation:
// The Parent component owns the state (count).
// It defines the increment function and passes it to the Child as a prop.
// When the Child calls this function, the Parent updates its state.
// This is an example of child-to-parent communication using callback props.
