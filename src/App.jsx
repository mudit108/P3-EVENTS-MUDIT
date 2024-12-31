import React, { useState } from 'react'
import ("./App.css");

function App() {
  const [name,setName]= useState("");
  const [age,setAge]= useState("");
  const [active,setActive] = useState(false);
  const sumbitHandle=()=>{
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    alert(`Name is ${name} and age is ${age}`);
    window.location.reload(false);
  }
  const mouseInFun=()=>{
    setActive(true);
  }
  const mouseOutFun=()=>{
    setActive(false);
  }
  return (
    <>
      <form>
        <input type="text" value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
        <input type="number" value={age} placeholder='enter age' onChange={(e)=>setAge(e.target.value)}/>
      </form>
      <button type="button" onClick={sumbitHandle}>sumbit</button>
      <hr/>
      <p>your name is {name}</p>
      <p>your age is {age}</p>
      <hr/>
      <div className={active?"active":""} onMouseOver={mouseInFun} onMouseLeave={mouseOutFun}>
        <h1>Data</h1>
        <h2>name : {localStorage.getItem("name")}</h2>
        <h2>age : {localStorage.getItem("age")}</h2>
      </div>
    </>
  )
}

export default App