import React, { useState } from 'react'
import './App.css';

function App() {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [active,setActive] = useState(false);
  const submitHandle=()=>{
    alert("sumbitted!");
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);;
  }
  const mouseInFun=()=>{  
    setActive(true);
  }
  const mouseOutFun=()=>{
    setActive(false);
  }
  return (
    <>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
      <button type="button" onClick={submitHandle}>submit</button>
      <div className={active ? "active":""} onMouseOver={mouseInFun} onMouseLeave={mouseOutFun}>
        <h2>name: {localStorage.getItem("name")}</h2>
        <h2>age: {localStorage.getItem("age")}</h2>
      </div>
    </>
  )
}

export default App