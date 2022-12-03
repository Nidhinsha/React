import React from 'react'

const Footballer = ({footballer}) => {
  return (
    <div>
    {footballer.map((player)=>(
       <div style={{backgroundColor:'green'}}>
        <h1>{player.name}</h1>
        <h2>{player.age}</h2>
        <h2>{player.country}</h2>
       </div>
      
   
    ))}
     </div>
  )
}

export default Footballer

