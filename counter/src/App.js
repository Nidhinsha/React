// import { useState } from "react";
import "./App.css";
import Employee from "./employee";
// import Counter from "./Counter";

function App() {
  //   const [count,setCount] = useState(0)
  //  const addCount =()=> {
  //   setCount(count+1)
  //   console.log(count,'the count');
  //  }
  //  const minusCount =()=>{
  //   setCount(count-1)
  //   console.log(count,'minus button');
  //  }
  // this one for the employee
  let emp = [
    { name: "thappu", age: 20 },
    { name: "sunitha", age: 35 },
    { name: "sunil", age: 45 },
  ];
  // return (
  //   <div className="App">
  //     <button onClick={addCount}>Add</button>
  //     <button onClick={minusCount}>Minus</button>
  //     <Counter  count={count} />
  //   </div>
  // );

  return (
    <div className="App">
      {emp.map((obj, index) => {
        return (
          <>
            <Employee key={index} name={obj.name} age={obj.age} />    {/*  this getting answer by using map function */}
            <Employee key={index} {...obj} />   {/*  this getting answer by using spred operator */}
          
          </>
        );
      })}
    </div>
  );
}

export default App;
