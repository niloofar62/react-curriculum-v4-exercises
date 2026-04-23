// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';

export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The bug happened because the state value was being changed directly with count++.
// React state should not be mutated directly. Instead, state should be updated
// using the setter function. I fixed it by using setCount with a new value,
// so React can detect the update and re-render the component.
