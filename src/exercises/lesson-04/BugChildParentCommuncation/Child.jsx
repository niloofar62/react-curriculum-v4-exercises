export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Explanation:
// The Child component does not manage the counter state.
// Instead, it receives a function from the Parent through props.
// When the button is clicked, it calls that function,
// which allows the Parent to update its state.
