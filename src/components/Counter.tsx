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
    <div style={styles.counter}>
      <div style={styles.count}>Count: {count}</div>
      <button style={styles.button} onClick={handleAdd}>Add</button>
      <button style={{ ...styles.button, ...styles.delayedButton }} onClick={handleDelayedAdd}>Delayed Add</button>
    </div>
  );
}

const styles = {
  counter: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  count: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  delayedButton: {
    backgroundColor: '#ffc107',
  },
};

export default Counter;
