import React from 'react'

export default function Input(props) {
  const sendInput1ToMain =(e)=>{
  if(props.id==="1"){
    props.sendValue1(e.target.value)

  }
  else{
    props.sendValue2(e.target.value)
  }

  }
  return (
    <div >
      <input  onChange={(e)=>sendInput1ToMain(e)} type="text" />
    </div>
  )
}
