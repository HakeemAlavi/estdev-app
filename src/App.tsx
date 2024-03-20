import React from "react";
import './App.css';
import Counter from './components/Counter';
import Context from './components/Context';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Counter</h1>
      </header>
      <main className="app-main">
        <Counter initialCount={5} />
        <Context defaultLocation="Tallinn" />
      </main>
    </div>
  );
}

export default App;
