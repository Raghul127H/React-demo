import React,{useEffect} from 'react'
import useApifetch from '../hook/useApifetch';
import axios from 'axios';
export default function ProductComps() {
  let {data}= useApifetch("https://jsonplaceholder.typicode.com/todos/")
     
 
  return (
    <div>ProductComps</div>
  )
}
