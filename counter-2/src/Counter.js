import React,{useEffect, useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('Mouting...');
        console.log('Updating...'+count);
        return ()=>{
            console.log('cleaning Up...'+count)
        }
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
      <h1>Hello i am an Components : {count} </h1>
    </div>
  )
}

export default Counter
