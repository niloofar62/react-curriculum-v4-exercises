export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(e) {
    e.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Explanation:
// By default, click events bubble from the child element to the parent element.
// When the button was clicked, both the button and the red box handlers were triggered.
// I fixed this by calling event.stopPropagation() inside the button handler,
// which prevents the event from reaching the parent element.
