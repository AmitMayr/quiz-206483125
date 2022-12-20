import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Result from './Result'


export default function Main() {
  const [firstInput, setFirstInput] = useState()
  const [secontInput, setSecontInput] = useState()
  const [result, setResult] = useState()
const CalcResult=()=>{
  if (firstInput===undefined||firstInput==="" ||secontInput===undefined ||secontInput===""){
    return alert("Please enter both inputs")
  }
  console.log(firstInput,secontInput);
  let result=parseInt(firstInput)+parseInt(secontInput);
  setResult(result);
}
const sendValue1=(input)=>{
  setFirstInput(input);
}
const sendValue2=(input)=>{
  setSecontInput(input);
}
  return (
    <div style={{display:"flex" , gap:10,textAlign:"center" ,justifyContent:"center"}}>
      <Input id={"1"} inputvalue={firstInput} sendValue1={sendValue1} />
      <Button CalcResult={CalcResult}/>
      <Input id={"2"} inputvalue={secontInput} sendValue2={sendValue2} />
      <Result result={result}/>

    </div>
  )
}
