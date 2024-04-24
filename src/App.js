import React from 'react';

// Custom hook for managing a counter
function useCounter(initialCount = 0) {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

// Component using the custom hook
function Counter() {
  // Using the custom hook
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

