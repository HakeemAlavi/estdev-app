import React from "react";
import './App.css';
import Counter from './components/Counter';
import Context from './components/Context';

function App() {
  return (
    <div className="App">
      {/* Pass initialCount prop to the Counter component */}
      <Counter initialCount={5} />
      {/* Pass defaultLocation prop to the Context component */}
      <Context defaultLocation="London" />
    </div>
  );
}

export default App;
