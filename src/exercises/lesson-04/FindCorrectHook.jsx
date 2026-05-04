import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Explanation:
// The click count needs to be shown in the UI, so React must re-render when it changes.
// A normal variable does not trigger a re-render.
// useRef also does not trigger re-renders.
// Therefore, I used useState so that when the value updates,
// React updates the UI and displays the correct count.
