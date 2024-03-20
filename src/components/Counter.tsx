import React, { useState } from 'react';

interface CounterProps {
  initialCount: number;
}

function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.initialCount);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleDelayedAdd = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelayedAdd}>Delayed Add</button>
    </div>
  );
}

export default Counter;
