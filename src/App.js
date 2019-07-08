import React from 'react';
import './App.css';
import Counter from "./components/counter"

function App() {
  return (
    <div className="App">
      <h2>redux counter</h2>
      
      {/*   import the Counter component from './components/counter */}
      <Counter />
    </div>
  );
}

export default App;
