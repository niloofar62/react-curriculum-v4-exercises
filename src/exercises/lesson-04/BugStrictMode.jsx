import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Explanation:
// The timer was incrementing incorrectly because the interval was not cleaned up.
// In React StrictMode, useEffect runs twice in development, which created two intervals.
// This caused the count to increase by 2 instead of 1.
// I fixed it by storing the interval ID and returning a cleanup function that clears it,
// so only one interval runs.
