import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./todo.css";


function Todolist() {
  const [input, setinput] = useState("")
  const [todo, setodo] = useState([])


  useEffect(() => {
    handlegetdata()
  }, [])


  const handlegetdata = async () => {
    const response = await axios.get("http://localhost:3000/todoList")
    setodo(response.data)

  }


  const handleadd =async() => {
    let body = {
      id: uuidv4,
      task: input
    }

    await axios.post("http://localhost:3000/todoList", body)

    handlegetdata()

  };

  const handledelete = async (deleteid) => {
    await axios.delete(`http://localhost:3000/todoList/${deleteid}`);

    alert("u r deleted the task");
    handlegetdata();

  }

  const handleedit = async (index) => {

    const updatedtask = prompt("update ur task", todo[index].task)

    let body = {
      id: todo[index].id,
      task: updatedtask

    }

    await axios.put(`http://localhost:3000/todoList/${todo[index].id}`, body)
    console.log(updatedtask);

    handlegetdata();


  }
  return (
    <div className='but' >
      <h2 className='at'>Todo list</h2>
      <div className='man'>
      <div className='sun'>
      <div className='on'>
      <input type="text" placeholder="enter ur task" onChange={(e) => setinput(e.target.value)} />
      <button onClick={handleadd} className='exp'>Add</button>
      <h5 className='nontitle'>Todo list</h5>
      <div className='nonlist'>
        <h5 className='non 1'>list</h5>
        <h5 className='non2'>status</h5>
        <h5 className='non3'>edit</h5>
        <h5>close</h5>
      </div>
      {todo.map((da, i) => (
        <div key={i}>
          <h1>{da.task}</h1>
          <div >
          <button onClick={()=>handleedit(i)}>Edit</button>
          <button  onClick={()=>handledelete(da.id)}>Delete</button>
          </div>
        </div>
         
      ))}
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Todolist;