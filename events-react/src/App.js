import React from "react";
import './App.css';

function App() {
  const clickHandle =()=>{
    console.log('you cliked me');
  }
  const DoubleClickHandle =(name)=>{
    alert('double click is worked..'+name)
  }
  const onChangeHandle =()=>{
    alert('you typed in the text field');
  }
  return (
    <div className="App">
     <h1> learn the react </h1>
     <button onClick={clickHandle}>click Me</button>
     <h1 onDoubleClick={() => DoubleClickHandle('thappu')}>Double Click</h1>
     <input onChange={onChangeHandle} type="text" />
    </div>
  );
}

export default App;
