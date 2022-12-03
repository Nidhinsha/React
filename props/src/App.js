import React from 'react';
import './App.css';
import Footballer from './Components/Footballer';
import States from './Components/States';

function App() {
  const footballer =[
    {name:'messi' ,age:34,country:'argentina'},
    {name:'ronaldo' ,age:35,country:'portugal'},
    {name:'neymar' ,age:30,country:'brazil'}
  ]
  return (
    <div className="App">
      <States name={'Argetina'} language={'spanish'} />
      <States name={'Brazil'} language={'portiguise'} />
      <States name={'Portugal'} language={'portiguise'}  />
      <Footballer footballer={footballer} />
    </div>
  );
}

export default App;
