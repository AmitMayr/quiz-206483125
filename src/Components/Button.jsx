import React from 'react'

export default function Button(props) {
  return (
    <div >
      <button style={{backgroundColor:"green"}} onClick={()=>props.CalcResult()}>+</button>
    </div>
  )
}
