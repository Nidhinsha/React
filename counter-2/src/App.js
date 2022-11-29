
import './App.css';
import Counter from './Counter';
import { useState } from "react";

function App() {
  const [state,setState] = useState(false)
  return (
    <div className="App">
      <h1 onClick={()=>setState(!state)} >Show me/ Hide this</h1>
      {state &&  <Counter />}
    </div>
  );
}

export default App;
