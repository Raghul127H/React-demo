import React, { useState } from 'react'


 function Grocery() {

  const [data,setdata]= useState("")

  const [button, setbutton]= useState([])

  const handleadd =(e)=> {
   setdata(e.target.value)
  }

  const handleitem =(e)=>{
    (setbutton([...button,data]))

   
  }
  return (
    <div>
      <h1>Grocery bud</h1>
    <input type="text" onChange={handleadd}/>
    
    <button onClick={handleitem}>Add item</button>

   <div>
    <h2>add {data}</h2>
    {button.map((da,i)=>(
    <div key={i}>
    <h2> {da}</h2>
    </div>
      

      ))},
     
   </div>


    </div>
  )
}
export default Grocery;