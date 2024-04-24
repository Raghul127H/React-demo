import React, { useEffect, useRef } from 'react'
import "./style.css"

export default function UserefComp() {

    let inputref = useRef()
    useEffect(() => {
        inputref.current.focus()

    },[]);


  return (
    
        <div className='sand'>
            <h1 className='bok'>facebook</h1>
        <input ref={inputref} placeholder='enter ur name' className='and'/>
        <br/>
        <br/>
        <input ref={inputref} placeholder='password' className='cl'/>
        <br/>
        <br/>
        <input ref={inputref} placeholder='login' className='lo'/>
        
        </div>

  )
}
