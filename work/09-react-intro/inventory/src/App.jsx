// App.jsx
import React, { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReorder = () => setCount(5);

  return (
    <div className="App">
      <div className="inventory-controls">
        <button onClick={handleIncrement}>+</button>
        <span className="inventory-count">Inventory Count: {count}</span>
        <button onClick={handleDecrement} disabled={!count}>-</button>
        {count === 0 && <Reorder onReorder={handleReorder} />}
      </div>
    </div>
  );
}

export default App;

