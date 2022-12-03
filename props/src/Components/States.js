import React from 'react'

const States = (props) => {
  return (
    <div style={{backgroundColor:'yellow'}}>
      <h1>{props.name}</h1>
      <h2>{props.language}</h2>
    </div>
  )
}

export default States
