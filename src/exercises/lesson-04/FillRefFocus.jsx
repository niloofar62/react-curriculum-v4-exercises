import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Explanation:
// useRef allows us to directly access a DOM element without causing a re-render.
// I created a reference for the input field and attached it using the ref attribute.
// Then I used inputRef.current.focus() when the button is clicked
// to move the cursor into the input field.
