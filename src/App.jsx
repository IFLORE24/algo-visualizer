import { useState } from 'react'
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
      </div>
  );
}

export default App
