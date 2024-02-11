import { useState } from 'react';

function Counter() {
  // Setting the initial state of the Counter component
  const [count, setCount] = useState(0);

  // handleIncrement increments count by 1
  const handleIncrement = () => {
    // Using the setCount method to update the component's state
    setCount(count + 1);
  };

  // Returns the JSX that should be rendered
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
