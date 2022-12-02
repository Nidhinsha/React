import React,{ useState } from "react";
import './App.css';

function App() {
  const [color,setColor] = useState('Green')
  const changeColor =()=>{
    setColor('blue')
  }
  const [count,setCount]=useState(0)
  const increament=()=>{
    setCount(count+1)
  }
  const decreament=()=>{
    setCount(count-1)
  }
  return (
    <div className="App">
      <h1>the use State </h1>
      <h2>the colour will change : {color} </h2>
      <button onClick={changeColor}>change color</button>
      <h2>counter {count} </h2>
      <button style={{margin:'10px'}} onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  );
}

export default App;
