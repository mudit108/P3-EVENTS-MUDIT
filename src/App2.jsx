import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name,setName] = useState("");
  const [age, setAge] = useState("");
  const [tname,setTname]= useState("");
  const [tage,setTage]= useState("");
  const [active,setActive] = useState(false);


  const clickHandle =()=>{
    alert("form submitted");
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    setTname(name);
    setTage(age);
    
  }
  useEffect(()=>{
        setTname(localStorage.getItem("name"));
        setTage(localStorage.getItem("age"));
  },[])

  const mouseHandler =() =>{
    setActive(true);
  }
  const mouseLeave=()=>{
    setActive(false);
  }

  return (
    <>
      <form>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
        placeholder="Enter name"/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter age"/>
        <button onClick={clickHandle} >Submit</button>
      </form>
      <div>
        <p>your name is<span className='text12'> {name}</span></p>
        <p>your age is<span className='text12'> {age}</span></p>
      </div>
      <hr/>
      <table border={3} onMouseOver={mouseHandler} onMouseLeave={mouseLeave} className={active?"active":""}>
        <th>name</th>
        <th>age</th>
        <tr>
          <td>{tname}</td>
          <td>{tage}</td>
        </tr>
      </table>

    </>
  )
}

export default App