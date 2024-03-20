import React from "react";
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter initialCount={5} />
    </div>
  );
}

export default App;
